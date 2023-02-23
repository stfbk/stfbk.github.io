"use strict";

class Effects {

    constructor(redundancy, scalability, reliability, maintenance, dosResilience, vendorLockIn, onPremiseSavings, cspSavings) {
        
        this.values = {}
        this.values[goals.redundancy] = redundancy;
        this.values[goals.scalability] = scalability;
        this.values[goals.reliability] = reliability;
        this.values[goals.maintenance] = maintenance;
        this.values[goals.dosResilience] = dosResilience;
        this.values[goals.vendorLockIn] = vendorLockIn;
        this.values[goals.onPremiseSavings] = onPremiseSavings;
        this.values[goals.cspSavings] = cspSavings;
    }

    getRedundancy() {
        return this.calculateGoal(goals.redundancy);
    }

    getScalability() {
        return this.calculateGoal(goals.scalability);
    }

    getReliability() {
        return this.calculateGoal(goals.reliability);
    }

    getMaintenance() {
        return this.calculateGoal(goals.maintenance);
    }

    getDOSResilience() {
        return this.calculateGoal(goals.dosResilience);
    }

    getVendorLockIn() {
        return this.calculateGoal(goals.vendorLockIn);
    }

    getOnPremiseSavings() {
        return this.calculateGoal(goals.onPremiseSavings);
    }

    getCSPSavings() {
        return this.calculateGoal(goals.cspSavings);
    }

    getScore() {
        return {
            [goals.redundancy]: this.getRedundancy(), 
            [goals.scalability]: this.getScalability(), 
            [goals.reliability]: this.getReliability(), 
            [goals.maintenance]: this.getMaintenance(), 
            [goals.dosResilience]: this.getDOSResilience(), 
            [goals.vendorLockIn]: this.getVendorLockIn(), 
            [goals.onPremiseSavings]: this.getOnPremiseSavings(), 
            [goals.cspSavings]: this.getCSPSavings()
        };
    }

    calculateGoal(goal) {

        let value = this.values[goal];
        let weight = weightsGoals[goal];
        value = value * weight;

        return value;
    }
}


const effectsOnGoal = {}
effectsOnGoal[proxyClient.toString()]             = new Effects(+0, +1, +1, +1, +1, +0, +1, +0);
effectsOnGoal[proxyOnPremise.toString()]          = new Effects(+0, -1, -1, -1, -1, +0, -1, +0);
effectsOnGoal[proxyClientOnPremise.toString()]    = new Effects(+0, +0, +0, +0, +0, +0, +0, +0);
effectsOnGoal[RMOnPremise.toString()]             = new Effects(-1, -1, -1, -1, -1, +1, -1, +1);
effectsOnGoal[RMCSP.toString()]                   = new Effects(+1, +1, +1, +1, +1, -1, +1, -1);
effectsOnGoal[RMNull.toString()]                  = new Effects(+0, +0, +0, +0, +0, +0, +0, +0);
effectsOnGoal[MSOnPremise.toString()]             = new Effects(-1, -1, -1, -1, -1, +1, -1, +1);
effectsOnGoal[MSCSP.toString()]                   = new Effects(+1, +1, +1, +1, +1, -1, +1, -1);
effectsOnGoal[MSOnPremiseCSP.toString()]          = new Effects(+0, +0, +0, +0, +0, +0, +0, +0);
effectsOnGoal[DSOnPremise.toString()]             = new Effects(-1, -1, -1, -1, -1, +1, -1, +1);
effectsOnGoal[DSCSP.toString()]                   = new Effects(+1, +1, +1, +1, +1, -1, +1, -1);
effectsOnGoal[DSOnPremiseCSP.toString()]          = new Effects(+0, +0, +0, +0, +0, +0, +0, +0);