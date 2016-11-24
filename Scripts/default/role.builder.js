var roleBuilder = {

    /** @param {Creep} creep **/
    run: function(creep) {

        if(creep.memory.building && creep.carry.energy == 0) {
            creep.memory.building = false;
            creep.say('harvesting');
        }
        if(!creep.memory.building && creep.carry.energy == creep.carryCapacity) {
            creep.memory.building = true;
            creep.say('building');
        }

        if(creep.memory.building) {
            var targets = creep.room.find(FIND_CONSTRUCTION_SITES);
            if(targets.length) {
                if(creep.build(targets[0]) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(targets[0]);
                }
            }
        }
        else {
            
            var energyStorage = Game.spawns.H.room.find(FIND_MY_STRUCTURES, {
                filter: { structureType: STRUCTURE_SPAWN || STRUCTURE_EXTENSION   }
            });
            
            if(creep.withdraw(energyStorage[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
            	creep.moveTo(energyStorage[0]);    
            }
            
            
            //console.log(energyStorage);
            
            //var sources = creep.room.find(FIND_SOURCES);
            //if(creep.harvest(sources[1]) == ERR_NOT_IN_RANGE) {
            //    creep.moveTo(sources[1]);
            //}
        }
    }
};

module.exports = roleBuilder;