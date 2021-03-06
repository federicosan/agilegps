/* Copyright (c) 2016 Grant Miner */
'use strict';
import {get} from 'lodash';

export function full(item) {
	if (item.ad) {
		return item.ad.formattedAddress;
	}
}
export function street(item) {
	if (item.ad) {
		let ad = item.ad;

		if (ad.streetNumber || ad.streetName) { // Google
			let toRet = [];
			if (ad.streetNumber)
				toRet.push(ad.streetNumber);
			if (ad.streetName)
				toRet.push(ad.streetName);
			return toRet.join(' ');
		}
		// else if (ad.name) { // local-reverse-geocoder
		// 	return ad.name;
		// }
	}
}
export function city(item) {
	if (item.ad) {
		if (item.ad.city) { // Google
			return get(item, 'ad.city');
		} else if (item.ad.name) { // local-reverse-geocoder
			return get(item, 'ad.name');
		}

	}
}
export function state(item) {
	if (item.ad) {
		if (get(item, 'ad.administrativeLevels.level1long')) {
			return get(item, 'ad.administrativeLevels.level1long');
		} else if (item.ad.admin1Code) {
			return get(item, 'ad.admin1Code.name');
		}
		// else if (item.ad.admin2Code) {
		// 	return get(item, 'ad.admin2Code.name');
		// }
	}
}
