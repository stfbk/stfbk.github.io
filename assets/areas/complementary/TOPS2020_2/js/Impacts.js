"use strict";

class Impacts {

    constructor(C, I, A) {
        
        this.values = {}
        this.values[properties.C] = C;
        this.values[properties.I] = I;
        this.values[properties.A] = A;

        this.score = C + I + A;
    }

    getC() {
        return this.calculateProtection(properties.C);
    }

    getI() {
        return this.calculateProtection(properties.I);
    }

    getA() {    
        return this.calculateProtection(properties.A);
    }

    getScore() {
        return this.calculateProtection(properties.C) + this.calculateProtection(properties.I) + this.calculateProtection(properties.A);
    }

    calculateProtection(property) {

        let value = this.values[property];
        // let weight = weightsProperties[property];
        // value = value * weight;

        return value;
    }
}


const effectsOnImpact = {}
effectsOnImpact[pointsOfAttack.Proxy]     = new Impacts(impacts.high, impacts.high, impacts.none);
effectsOnImpact[pointsOfAttack.MS]        = new Impacts(impacts.none, impacts.high, impacts.none);
effectsOnImpact[pointsOfAttack.RM]        = new Impacts(impacts.none, impacts.high, impacts.none);
effectsOnImpact[pointsOfAttack.DS]        = new Impacts(impacts.none, impacts.low,  impacts.low);
effectsOnImpact[pointsOfAttack.ProxyDS]   = new Impacts(impacts.none, impacts.low, impacts.none);
effectsOnImpact[pointsOfAttack.ProxyMS]   = new Impacts(impacts.none, impacts.high, impacts.none);
effectsOnImpact[pointsOfAttack.RMMS]      = new Impacts(impacts.none, impacts.high, impacts.none);
effectsOnImpact[pointsOfAttack.RMDS]      = new Impacts(impacts.none, impacts.low, impacts.none);
