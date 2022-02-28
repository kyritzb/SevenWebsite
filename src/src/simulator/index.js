const INITIAL_HOUSES = [
  {
    rent: 3000,
    cost: 1000000,
  },
  {
    rent: 3000,
    cost: 1000000,
  },
  {
    rent: 3000,
    cost: 1000000,
  },
  {
    rent: 3000,
    cost: 1000000,
  },
  {
    rent: 3000,
    cost: 1000000,
  },
  {
    rent: 3000,
    cost: 1000000,
  },
  {
    rent: 3000,
    cost: 1000000,
  },
  {
    rent: 3000,
    cost: 1000000,
  },
  {
    rent: 3000,
    cost: 1000000,
  },
  {
    rent: 3000,
    cost: 1000000,
  },
];

const INITIAL_HOUSES_TO_BUY = [
  {
    rent: 2500,
    cost: 750000,
  },
  {
    rent: 2800,
    cost: 800000,
  },
  {
    rent: 1500,
    cost: 300000,
  },
  {
    rent: 1000,
    cost: 150000,
  },
  {
    rent: 1000,
    cost: 100000,
  },
  {
    rent: 2500,
    cost: 750000,
  },
  {
    rent: 2800,
    cost: 800000,
  },
  {
    rent: 1500,
    cost: 300000,
  },
  {
    rent: 1000,
    cost: 150000,
  },
  {
    rent: 1000,
    cost: 100000,
  },
];

const START_OWN_SUPPLY = 100;
const INITIAL_HOUSES_VALUE = calculateHouseValue(INITIAL_HOUSES);
const INITIAL_BACKING = calculateBackingPerToken(
  INITIAL_HOUSES,
  START_OWN_SUPPLY
);
let TARGET_STABLE_PERCENTAGE = 0.25;
let TARGET_REALESTATE_INCREASE = 1.02;
let TARGET_REALESTATE_PERCENTAGE = 1 - TARGET_STABLE_PERCENTAGE;
let TARGET_STABLES_RETURN = 1.5;
const INITIAL_TREASURY = {
  stable: INITIAL_HOUSES_VALUE * TARGET_STABLE_PERCENTAGE,
  realestate: INITIAL_HOUSES_VALUE * TARGET_REALESTATE_PERCENTAGE,
};

let MONTHS = 60;
let cur_own_supply = START_OWN_SUPPLY;
let cur_houses = INITIAL_HOUSES;
let cur_houses_to_buy = INITIAL_HOUSES_TO_BUY;
let cur_treasury = INITIAL_TREASURY;

export default function run(
  start_own_supply,
  monthsToRunFor,
  targetStablePercentage,
  housePercentIncrease,
  stablesIncrease,
  farmStables,
  housePriceIncrease
) {
  console.log("=====================");
  console.log("starting up the simulation...");
  cur_own_supply = start_own_supply;
  MONTHS = monthsToRunFor;
  TARGET_STABLE_PERCENTAGE = targetStablePercentage;
  TARGET_REALESTATE_PERCENTAGE = 1 - TARGET_STABLE_PERCENTAGE;
  TARGET_REALESTATE_INCREASE = housePercentIncrease;

  console.log("Start Own Supply:", cur_own_supply);
  console.log("TARGET_STABLE_PERCENTAGE:", TARGET_STABLE_PERCENTAGE);
  console.log("TARGET_REALESTATE_PERCENTAGE:", TARGET_REALESTATE_PERCENTAGE);
  console.log("TARGET_REALESTATE_INCREASE:", TARGET_REALESTATE_INCREASE);

  const stats = [];

  for (let month = 0; month < MONTHS; month++) {
    let rental_income = calculateRentalIncome(cur_houses);
    console.log("RENTAL INCOME:", rental_income);
    cur_treasury.stable += rental_income;
    let stable_to_spend = calculateStablesAvailable(cur_treasury);
    console.log("SPENDABLE STABLE:", stable_to_spend);
    //buy houses
    let bought_houses = buyhouse(stable_to_spend);

    if (bought_houses.length != 0) {
      console.log("Bought house!");
      for (let i = 0; i < bought_houses.length; i++) {
        cur_treasury.realestate =
          cur_treasury.realestate + bought_houses[i].cost;
        cur_treasury.stable = cur_treasury.stable - bought_houses[i].cost;

        cur_houses.push(bought_houses[i]);
      }
    }

    let cur_backing = calculateBackingPerToken(cur_houses, cur_own_supply);
    let newMintAmnt = calculateMintOwn(cur_houses, cur_backing);
    console.log("MINTED OWN:", newMintAmnt);
    cur_own_supply += newMintAmnt;

    //things that happen every year
    if (month % 12 == 0) {
      //house price increase
      if (housePriceIncrease) {
        cur_houses = valueChange(cur_houses, TARGET_REALESTATE_INCREASE);
        cur_treasury.realestate = calculateHouseValue(cur_houses);
      }

      if (farmStables) {
        cur_treasury.stable = cur_treasury.stable * stablesIncrease;
      }
    }

    printStats(month, cur_own_supply, cur_houses, cur_treasury);
    stats.push(collectStats(month, cur_own_supply, cur_houses, cur_treasury));
  }
  return stats;
}

//===============================
//HELPER FUNCTIONS
//===============================

function valueChange(houses, realEstateIncrease) {
  let arr = [];
  for (let i = 0; i < houses.length; i++) {
    let oldHouse = houses[i];
    oldHouse.cost = oldHouse.cost * realEstateIncrease;
    arr.push(oldHouse);
  }
  return arr;
}

function calculateMintOwn(houses, backingPerOwn) {
  let total = 0;

  for (let i = 0; i < houses.length; i++) {
    total += 3 * (((houses[i].rent * 0.1) / backingPerOwn) * 12);
  }
  return total;
}

function calculateBackingPerToken(houses, ownSupply) {
  let totalBacking = calculateHouseValue(houses);
  return totalBacking / ownSupply;
}

function calculateStablesAvailable(treasury) {
  let treasurytotal = treasury.realestate + treasury.stable;
  let realEstatePercentage = treasury.realestate / treasurytotal;
  let stablesPercentage = treasury.stable / treasurytotal;

  let left = 0;

  if (realEstatePercentage < TARGET_REALESTATE_PERCENTAGE) {
    //if we have too many stables and not enough homes

    //if we have too many stables and not enough houses
    if (stablesPercentage > TARGET_STABLE_PERCENTAGE) {
      //if our current composition is 28% stables and we want to get to 25% then we spend max 3%
      left = (stablesPercentage - TARGET_STABLE_PERCENTAGE) * treasury.stable;
    }
  }

  if (left < 0) {
    left = 0;
  }
  return left;
}

function buyhouse(stablesAvailable) {
  let bought = [];
  cur_houses_to_buy.sort((a, b) => a.cost - b.cost);

  console.log("stables left:", stablesAvailable);
  for (let i = 0; i < cur_houses_to_buy.length; i++) {
    if (cur_houses_to_buy[i].cost < stablesAvailable) {
      console.log("I can buy!");
      let housebought = cur_houses_to_buy.splice(i, 1);
      bought.push(housebought[0]);
    }
  }
  return bought;
}

function printStats(month, own_supply, houses, treasury) {
  console.log("===============MONTH #" + month + "===============");
  console.log("OWN SUPPLY:", own_supply);
  console.log("NUMBER OF HOUSES:", houses.length);
  console.log("TOTAL HOUSE VALUE:", calculateHouseValue(houses));
  console.log("BACKING:", calculateBackingPerToken(houses, own_supply));
  console.log("------------------|");
  console.log("|TREASURY:");
  console.log("|Stables:", treasury.stable);
  console.log("|Real Estate:", treasury.realestate);
  console.log("------------------|");
  console.log("=======================================");
}

function collectStats(month, own_supply, houses, treasury) {
  let object = {
    month: month,
    own_supply: own_supply,
    numberOfHouses: houses.length + 1,
    houses: houses,
    totalHouseValue: calculateHouseValue(houses),
    backingPerOwn: calculateBackingPerToken(houses, own_supply),
    treasury: {
      stable: treasury.stable,
      realestate: treasury.realestate,
    },
  };
  return object;
}

function calculateRentalIncome(houses) {
  let total = 0;
  for (let i = 0; i < houses.length; i++) {
    total += houses[i].rent;
  }
  return total;
}

function calculateHouseValue(houses) {
  let total = 0;
  for (let i = 0; i < houses.length; i++) {
    total += houses[i].cost;
  }
  return total;
}
