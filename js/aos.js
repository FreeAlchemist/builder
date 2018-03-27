var units = {
	basic : {
		name:'NAME',
		role:'ROLE',
		move:'MOVE',
		wounds:'WOUNDS',
		bravery:'BRAVERY',
		save:'SAVE',
		points:'PTS',
		weapon : {
			'WEAPON_NAME_1' : {
				type:'TYPE',
				range:'RANGE',
				attacks:'ATTACKS',
				tohit:'TOHIT',
				towound:'TOWOUND',
				rend:'REND',
				damage:'DMG',
			},
			'WEAPON_NAME_2' : {
				type:'TYPE',
				range:'RANGE',
				attacks:'ATTACKS',
				tohit:'TOHIT',
				towound:'TOWOUND',
				rend:'REND',
				damage:'DMG',
			},
		},
		abilities : {
			'ABILITY_1' : 'ABILITY_1_TEXT',
			'ABILITY_2' : 'ABILITY_2_TEXT',
		},
		keywords:'KEYWORD_1, KEYWORD_2',
	},
	cairnwraith : {
		name:'CAIRN WRAITH',
		role:'Leader',
		move:'6',
		wounds:'4',
		bravery:'10',
		save:'4+',
		points:'60',
		weapon : {
			'Reaper Scythe' : {
				type:'melee',
				range:'2',
				attacks:'3',
				tohit:'4+',
				towound:'3+',
				rend:'-1',
				damage:'2',
			},
		},
		abilities : {
			'FLY' : 'Cairn Wraith can fly.',
			'Ethereal' : 'Ignore modifiers (positive or negative) when making save rolls for this model.',
			'Frightful Touch' : 'Each time you make a hit roll of 6+ for a Reaper Scythe, that attack inflicts 2 mortal wounds instead of the normal damage.',
			'Reaped Like Corn' : 'If the target unit has 5 or more models, you can re-roll failed hit rolls for this model\'s Reaper Scythe.',
			},
		keywords:'DEATH, MALIGNANT, NIGHTHAUNT, HERO, CAIRN WRAITH',
	},
	tombbanshee : {
		name:'TOMB BANSHEE',
		role:'Leader',
		move:'6',
		wounds:'4',
		bravery:'10',
		save:'4+',
		points:'80',
		weapon : {
			'Ghostly Howl' : {
				type:'missile',
				range:'10',
				attacks:'1',
				tohit:'*',
				towound:'*',
				rend:'*',
				damage:'*',
			},
			'Chill Dagger' : {
				type:'melee',
				range:'1',
				attacks:'1',
				tohit:'4+',
				towound:'3+',
				rend:'-2',
				damage:'D3',
			},
		},
		abilities : {
			'FLY' : 'Tomb Banshee can fly.',
			'Ethereal' : 'Ignore modifiers (positive or negative) when making save rolls for this model.',
			'Frightful Touch' : 'Each time you make a hit roll of 6+ for a Chill Dagger, that attack inflicts D3 mortal wounds instead of the normal damage (do not make a wound or save roll).',
			'Ghostly Howl' : 'When making a Ghostly Howl attack, pick a target within range, roll 2D6; if the total is higher than that unit\'s Bravery, it suffers a number of mortal wounds equal to the difference.',
			},
		keywords:'DEATH, MALIGNANT, NIGHTHAUNT, HERO, TOMB BANSHEE',
	},
}

// console.log(units)
// console.log(units['basic'])
// console.log(units['cairnwraith'].weapon['Reaper Scythe'])
// console.log(units['tombbanshee'].keywords)

function getUnit(unitname){
	// console.log(units[unitname])
	return units[unitname]
}


var unit = 'basic'
unit = 'cairnwraith'
unit = 'tombbanshee'
// getUnit(unit)

var unitarr = ['cairnwraith','tombbanshee']
console.log(unitarr.length)

$('body').prepend($('<div />',{id:'page'}))

for (var i =0; i < unitarr.length; i++) {
	console.log(i)
	console.log(unitarr[i])
	var thisunit = getUnit(unitarr[i])
	var name = thisunit.name
	var move = thisunit.move
	var wounds = thisunit.wounds
	var bravery = thisunit.bravery
	var save = thisunit.save
	var points = thisunit.points
	var role = thisunit.role
	var keywords = thisunit.keywords


	$('#page').append($('<div />',{class:'warscroll',id:unitarr[i]}))
		$('#'+unitarr[i]).append(
			$('<div />',{class:'chars'})
			.append($('<div />',{class:'name',text:name+' ('+role+')'}))
			.append($('<div />',{class:'stats'}).append($('<div />',{class:'statsheader',text:'MOVE'})).append($('<div />',{class:'statstext',text:move})))
			.append($('<div />',{class:'stats'}).append($('<div />',{class:'statsheader',text:'WOUNDS'})).append($('<div />',{class:'statstext',text:wounds})))
			.append($('<div />',{class:'stats'}).append($('<div />',{class:'statsheader',text:'BRAVERY'})).append($('<div />',{class:'statstext',text:bravery})))
			.append($('<div />',{class:'stats'}).append($('<div />',{class:'statsheader',text:'SAVE'})).append($('<div />',{class:'statstext',text:save})))
			.append($('<div />',{class:'stats'}).append($('<div />',{class:'statsheader',text:'PTS'})).append($('<div />',{class:'statstext',text:points})))
		)

		if(thisunit.weapon){
			$('#'+unitarr[i]).append($('<div />',{class:'weapon',id:unitarr[i]+'-weapon'}))
			$('#'+unitarr[i]+'-weapon').append($('<div />',{id:unitarr[i]+'-missile'}))
			$('#'+unitarr[i]+'-weapon').append($('<div />',{id:unitarr[i]+'-melee'}))

			var hasmissile = 0
			var hasmelee = 0
			
			var weaponarr = []
			for (var c in thisunit.weapon) {
				weaponarr.push(c)
			}
			var weaponquantity = weaponarr.length
			for (var s = 0; s < weaponquantity; s++) {
				var name = weaponarr[s]
				var type = thisunit.weapon[name].type
				var range = thisunit.weapon[name].range
				var attacks = thisunit.weapon[name].attacks
				var tohit = thisunit.weapon[name].tohit
				var towound = thisunit.weapon[name].towound
				var rend = thisunit.weapon[name].rend
				var damage = thisunit.weapon[name].damage
				var weaponinfo = $('<div />',{class:'weapon'}).append($('<div />',{class:'weapon-name',text:name})).append($('<div />',{class:'weapon-stats'}).append($('<div />',{class:'weapon-stats-header',text:'RANGE"'})).append($('<div />',{class:'weapon-stats-text',text:range}))).append($('<div />',{class:'weapon-stats'}).append($('<div />',{class:'weapon-stats-header',text:'attacks'})).append($('<div />',{class:'weapon-stats-text',text:attacks}))).append($('<div />',{class:'weapon-stats'}).append($('<div />',{class:'weapon-stats-header',text:'To Hit'})).append($('<div />',{class:'weapon-stats-text',text:tohit}))).append($('<div />',{class:'weapon-stats'}).append($('<div />',{class:'weapon-stats-header',text:'To Wound'})).append($('<div />',{class:'weapon-stats-text',text:towound}))).append($('<div />',{class:'weapon-stats'}).append($('<div />',{class:'weapon-stats-header',text:'Rend'})).append($('<div />',{class:'weapon-stats-text',text:rend}))).append($('<div />',{class:'weapon-stats'}).append($('<div />',{class:'weapon-stats-header',text:'damage'})).append($('<div />',{class:'weapon-stats-text',text:damage})))

				if(type == 'missile'){
					hasmissile = 1
					$('#'+unitarr[i]+'-missile').append(weaponinfo)
				}
				if(type == 'melee'){
					hasmelee = 1
					$('#'+unitarr[i]+'-melee').append(weaponinfo)
				}
			}

			//if no weapon of such type, remove appropriate header
			if(hasmissile == 1){$('#'+unitarr[i]+'-missile').prepend($('<div />',{class:'header',text:'MISSILE WEAPONS'}))}
				else{$('#'+unitarr[i]+'-missile').hide()}
			if(hasmelee == 1){$('#'+unitarr[i]+'-melee').prepend($('<div />',{class:'header',text:'MELEE WEAPONS'}))}
				else{$('#'+unitarr[i]+'-melee').hide()}
		}

		if(thisunit.abilities){
			$('#'+unitarr[i]).append($('<div />',{class:'abilities',id:unitarr[i]+'-abilities'}))
			$('#'+unitarr[i]+'-abilities').append($('<div />',{class:'header',text:'ABILITIES'}))

			var abilarr = []
			for (var c in thisunit.abilities) {
				abilarr.push(c)
			}
			var abilquantity = abilarr.length
			for (var s = 0; s < abilquantity; s++) {
				var thisability = abilarr[s]
				var thisabilitytext = thisunit.abilities[thisability]
				console.log('thisability: '+thisability)
				console.log('thisabilitytext: '+thisabilitytext)
				$('#'+unitarr[i]+'-abilities').append($('<div />',{class:'ability'}).append($('<div />',{class:'abilityheader',text:thisability})).append($('<div />',{class:'abilitytext',text:thisabilitytext})))
			}
			console.log(abilquantity)
			console.log(abilarr)
			// $('#'+unitarr[i]+'-abilities').append($('<div />',{class:'header',text:'ABILITIES'}))
		}
		$('#'+unitarr[i]).append($('<div />',{class:'header',text:'KEYWORDS'}))
		$('#'+unitarr[i]).append($('<div />',{class:'keywords',text:keywords}))
}










