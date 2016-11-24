/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports.thing = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('tasks.common');
 * mod.thing == 'a thing'; // true
 */

var commonTasks = {

    /** @param {Creep} creep **/
    harvestRandomResource: function(creep) {
        
        //Math.floor(Math.random() * 6) + 1  
        
        var sources = creep.room.find(FIND_SOURCES);
        
        var rndSource = Math.floor(Math.random() * sources.length);
        
        if(creep.harvest(sources[rndSource]) == ERR_NOT_IN_RANGE) {
                creep.moveTo(sources[rndSource]);
        }
        
        //return rndSource;
        
    }
};

module.exports = commonTasks;