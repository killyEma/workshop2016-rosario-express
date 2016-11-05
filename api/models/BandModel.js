'use strict';

const dataBase = require('../../database/Database').instance;
const docTypes = require('../../database/docTypes');

class BandModel {

    getList () {
        return dataBase.find({docType: docTypes.BAND})
    }

    getById(bandId){
        return dataBase.findOne({docType: docTypes.BAND, _id: bandId})
    }

    getArtistById(bandId) {
    	return new Promise(function(resolve,reject){
	    	dataBase.findOne({_id: bandId})
	    	.then(function(band){
		    	return dataBase.find({_id: {$in: band.artists}})
			})
	    	.then(function(artists){
	    		resolve(artists)
	    	})
	    	.catch(function(error){
	    		reject(error)
	    	})
    	});
    }
}
module.exports.BandModel = BandModel;
module.exports.instance = new BandModel();