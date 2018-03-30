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
		spell : {
			'Arcane Bolt' : {
				cast:'5',
				range:'18 in LoS',
				target:'enemy unit',
				effect:'The unit you pick up suffers D3 mortal wounds.',
			},
			'Mystic Shield' : {
				cast:'6',
				range:'18 in LoS',
				target:'caster or friendly unit',
				effect:'You can add 1 to all save rolls for the unit you pick until the start of your next hero phase.',
			},
		},
		command : {
			'Inspiring Presence' : 'Pick a unit from your army that is within 12" of your general. That unit does not have to take battleshock tests until your next hero pse.',
		},
		keywords:'KEYWORD_1, KEYWORD_2',
	},
	vampirelord : {
		name:'Vampire Lord',
		role:'Leader',
		move:'5 (10)',
		wounds:'5',
		bravery:'10',
		save:'4+',
		points:'140',
		weapon : {
			'Spirit-possesed Blades' : {
				type:'melee',
				range:'1',
				attacks:'4',
				tohit:'3+',
				towound:'3+',
				rend:'-1',
				damage:'D3',
			},
		},
		abilities : {
			'FLYing Horror' : 'Vampire Lord with wings have Move 10" and can fly.',
			'Chalice of Blood' : 'Once per battle, in your hero phase, a Vampire Lord with a Chalice of Blood heals D6 wounds.',
			'The Hunger' : 'At the end of any combat phase in which this model slew any enemy models, you can heal 1 wound that has been allocated to it.',
			'Deathly Invocation' : 'At the start of your hero phase, pick up to 3 different friendly <b>SUMMONABLE</b> units within 12" of this model. You can heal D3 wounds that have been allocated to each unit you picked (roll separately for each unit). If no wounds are currently allocated to a unit you have picked, you may instead return a number of slain models to it that have a combined Wounds characteristic equal to or less than the roll of a D3.',
			'Wizard' : 'Can attempt to cast one spell in each of your hero phases, and attempt to unbind one spell in each enemy hero phase.',
			},
		spell : {
			// 'Arcane Bolt (special)' : {
			// 	cast:'5',
			// 	range:'18 in LoS',
			// 	target:'enemy unit',
			// 	effect:'The unit you pick up suffers D3 mortal wounds.',
			// },
			// 'Mystic Shield (special)' : {
			// 	cast:'6',
			// 	range:'18 in LoS',
			// 	target:'caster or friendly unit',
			// 	effect:'You can add 1 to all save rolls for the unit you pick until the start of your next hero phase.',
			// },
		},
		command : {
			'Blood Feast' : 'Pick a friendly <b>Death</b> unit within 15". Models in that unit make one extra attack with each of their melee weapons until your next hero phase.',
		},
		general : '1',
		keywords:'DEATH, VAMPIRE, SOULBLIGHT, HERO, WIZARD, VAMPIRE LORD',
	},
	knightofshrouds : {
		name:'Knight of Shrouds',
		role:'Leader',
		move:'6',
		wounds:'5',
		bravery:'10',
		save:'4+',
		points:'120',
		weapon : {
			'Sword of Stolen Hours' : {
				type:'melee',
				range:'1',
				attacks:'4',
				tohit:'3+',
				towound:'3+',
				rend:'-1',
				damage:'2',
			},
		},
		abilities : {
			'FLY' : 'Knight of Shrouds can fly.',
			'Ethereal' : 'Ignore modifiers (positive or negative) when making save rolls for this model.',
			'Stolen Hours' : 'Each time a wound inflicted by this model\'s Sword of Stolen Hours slays an enemy <b>HERO</b>, heal 1 wound allocated to this model.',
			},
		command : {
			'Spectral Overseer' : 'In the combat phase of this turn, add 1 to hit rolls for friendly <b>NIGHTHAUNT</b> models while they are within 9" of this model.',
		},
		general : '1',
		keywords:'DEATH, MALIGNANT, NIGHTHAUNT, HERO, KNIGHT OF SHROUDS',
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
		command : {},
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
		command :{},
		keywords:'DEATH, MALIGNANT, NIGHTHAUNT, HERO, TOMB BANSHEE',
	},
	wightking1 : {
		name:'Wight King (Tomb Blade)',
		role:'Leader',
		move:'4',
		wounds:'5',
		bravery:'10',
		save:'3+',
		points:'120',
		weapon : {
			'Baleful Tomb Blade' : {
				type:'melee',
				range:'1',
				attacks:'4',
				tohit:'3+',
				towound:'3+',
				rend:'-1',
				damage:'1',
			},
		},
		abilities : {
			'Beheading Strike' : 'If the wound roll for an attack made with a Baleful Tomb Blade is 6+, that attack has a Damage characteristic of D3.',
			'Deathly Invocation' : 'At the start of your hero phase, pick up to 2 different friendly <b>SUMMONABLE</b> units within 6" of this model. You can heal D3 wounds that have been allocated to each unit you picked (roll separately for each unit). If no wounds are currently allocated to a unit you have picked, you may instead return a number of slain models to it that have a combined Wounds characteristic equal to or less than the roll of a D3.',
		},
		command : {
			'Lord of Bones' : 'Pick a friendly <b>DEATHRATTLE</b> unit within 18". Until your next hero phase, add 1 to the Attacks characteristic of that unit\'s melee weapons.',
		},
		general : '1',
		keywords:'DEATH, SKELETON, DEATHRATTLE, HERO, WIGHT KING',
	},
	wightking2 : {
		name:'Wight King (Black Axe)',
		role:'Leader',
		move:'4',
		wounds:'5',
		bravery:'10',
		save:'3+',
		points:'120',
		weapon : {
			'Black Axe' : {
				type:'melee',
				range:'1',
				attacks:'4',
				tohit:'3+',
				towound:'3+',
				rend:'-1',
				damage:'1',
			},
		},
		abilities : {
			'Black Axe' : 'If a model is allocated any wounds from attacks made using the Black Axe but is not slain, roll a dice after the Wight King has finished making all of its attacks. On a 6+ that model is slain.',
			'Barrow Armour' : 'Halve the number of wounds allocated to this model from each attack, rounding up (the remainder are negated).',
			'Deathly Invocation' : 'At the start of your hero phase, pick up to 2 different friendly <b>SUMMONABLE</b> units within 6" of this model. You can heal D3 wounds that have been allocated to each unit you picked (roll separately for each unit). If no wounds are currently allocated to a unit you have picked, you may instead return a number of slain models to it that have a combined Wounds characteristic equal to or less than the roll of a D3.',
		},
		command : {
			'Lord of Bones' : 'Pick a friendly <b>DEATHRATTLE</b> unit within 18". Until your next hero phase, add 1 to the Attacks characteristic of that unit\'s melee weapons.',
		},
		general : '1',
		keywords:'DEATH, SKELETON, DEATHRATTLE, HERO, WIGHT KING',
	},
	sepulcharguard : {
		name:'THE SEPULCHAR GUARD',
		role:'',
		move:'4',
		wounds:'1',
		bravery:'10',
		save:'6+',
		points:'80',
		weapon : {
			'Sepulchar Warden\'s Ancient Spear' : {
				type:'melee',
				range:'2',
				attacks:'3',
				tohit:'4+',
				towound:'4+',
				rend:'-',
				damage:'1',
			},
			'Petitioner\'s Ancient Blade (3)' : {
				type:'melee',
				range:'1',
				attacks:'1 (3)',
				tohit:'4+',
				towound:'4+',
				rend:'-',
				damage:'1',
			},
			'Champion\'s Ancient Greatblade' : {
				type:'melee',
				range:'1',
				attacks:'2',
				tohit:'4+',
				towound:'4+',
				rend:'-1',
				damage:'1',
			},
			'Prince\'s of Dust Ancient Mace' : {
				type:'melee',
				range:'1',
				attacks:'2',
				tohit:'4+',
				towound:'3+',
				rend:'-',
				damage:'1',
			},
			'Harvester\'s Ancient Scythe' : {
				type:'melee',
				range:'1',
				attacks:'1',
				tohit:'4+',
				towound:'3+',
				rend:'-',
				damage:'2',
			},
		},
		abilities : {
			'Crypt Shield' : 'Models with Crypt Shield can add +1 to save rolls against attacks with Rend of -',
			'Serve in Death' : 'You can add 1 to hit rolls for this unit if it is wholly within 18" of any friendly <b>Death Heroes</b>.',
			'Frightening Speed' : 'You can re-roll charge rolls for this unit.',
			'The Sepulchar Warden' : 'In each of your hero phases you can return D3 slain models to this init while the Sepulchar Warden is on the battlefield.',
			'unique' : 'Only one of this unit can be included in a Pitched Battle army.',
		},
		keywords:'DEATH, SKELETON, DEATHRATTLE, SKELETON WARRIORS, THE SEPULCHAR GUARD',
	},
	spirithosts : {
		name:'Spirit Hosts (3-12)',
		role:'Battleline Nighthaunt',
		move:'6',
		wounds:'3',
		bravery:'10',
		save:'4+',
		points:'120',
		weapon : {
			'Spectral Claws and Daggers' : {
				type:'melee',
				range:'1',
				attacks:'6',
				tohit:'5+',
				towound:'4+',
				rend:'-',
				damage:'1',
			},
		},
		abilities : {
			'FLY' : 'Spirit Hosts can fly.',
			'Ethereal' : 'Ignore modifiers (positive or negative) when making save rolls for this model.',
			'Frightful Touch' : 'If the hit roll for an attack made by a Spirit Host is 6+, immediately inflict 1 mortal wound instead of its normal damage.',
			},
		keywords:'DEATH, MALIGNANT, NIGHTHAUNT, SUMMONABLE, SPIRIT HOSTS',
	},
	mortisengine : {
		name:'Mortis Engine',
		role:'Behemoth',
		move:'14 | 12 | 10 | 8 | 4',
		wounds:'2|3-4|5-7|8-9|10-12',
		bravery:'10',
		save:'4+',
		points:'180',
				/*
		degradation table
		wailrg attacks move dmg
		9		12 		14 	0-2
		8		10 		12 	3-4
		7		8 		10 	5-7
		6		6 		8 	8-9
		5		4 		4 	10+
				*/
		weapon : {
			'Wail of the Damned' : {
				/*see below*/
				type:'missile',
				range:'9 | 8 | 7 | 6 | 5',
				attacks:'*',
				tohit:'*',
				towound:'*',
				rend:'*',
				damage:'*',
			},
			'Corpsemaster\'s Mortis Staff' : {
				type:'melee',
				range:'1',
				attacks:'1',
				tohit:'4+',
				towound:'3+',
				rend:'-1',
				damage:'D3',
			},
			'Spectral Host\'s Ethereal Weapons' : {
				type:'melee',
				range:'1',
				attacks:'12 | 10 | 8 | 6 | 4',
				tohit:'5+',
				towound:'4+',
				rend:'-',
				damage:'1',
			},
		},
		abilities : {
			'FLY' : 'Mortis Engines can fly.',
			'Frightful Touch' : 'Each time you make a hit roll of 6+ for a Spectral Host\'s Ethereal Weapons, that attack inflicts 1 mortal wound instead of the normal damage (do not make a wound or save roll).',
			'Wail of the Damned' : 'When making a Wail of the Damned attack, roll 2D6 for each enemy unit within the range shown on the damage table. If the total is higher than that unit\'s Bravery, it suffers D3 mortal wounds.',
			'The Reliquary' : 'Once per battle, in hero phase roll 4D6. Each unit within that many inches affected. <b>Death</b> units heal D3 wounds, but any other unit suffers D3 mortal wounds.',
			'Bound Necromancer' : 'Add 1 to casting rolls for Death Wizards within 12" of any Mortis Engines. Substract 1 from casting rolls for Order, Destruction and Chaos Wizards within 12" of any Mortis Engines.',
			},
		keywords:'DEATH, MALIGNANT, DEATHMAGES, MORTIS ENGINE',
	},
	hexwraiths : {
		name:'Hexwraiths (5-20)',
		role:'Battleline Nighthaunt',
		move:'12',
		wounds:'2',
		bravery:'10',
		save:'4+',
		points:'160',
		weapon : {
			'Hellwraith\'s Spectral Scythe' : {
				type:'melee',
				range:'1',
				attacks:'3',
				tohit:'4+',
				towound:'3+',
				rend:'-1',
				damage:'1',
			},
			'Spectral Scythe' : {
				type:'melee',
				range:'1',
				attacks:'2',
				tohit:'4+',
				towound:'3+',
				rend:'-1',
				damage:'1',
			},
			'Skeletal Steed\'s Hooves and Teeth' : {
				type:'melee',
				range:'1',
				attacks:'3',
				tohit:'4+',
				towound:'5+',
				rend:'-',
				damage:'1',
			},
		},
		abilities : {
			'HELLWRAITH' : 'The leader of this unit is Hellwraith. Add 1 to the Attacks characteristic of a Hellwraith\'s Spectral Scythe.',
			'FLY' : 'Hexwraiths can fly.',
			'Ethereal' : 'Ignore modifiers (positive or negative) when making save rolls for this model.',
			'Frightful Touch' : 'Each time you make a hit roll of 6+ for a Spectral Scythe, that attack inflicts 1 mortal wound instead of the normal damage (do not make a wound or save roll).',
			'Spectrum Hunter\'s' : 'In the movement phase, immediately after this unit has moved, you can pick an enemy unit that was passed across by any models from this unit. If you do so, roll a dice for each Hexwraith that passed across that enemy unit. For each roll of 5+, that enemy unit suffers 1 mortal wound.',
			},
		keywords:'DEATH, MALIGNANT, NIGHTHAUNT, SUMMONABLE, HEXWRAITHS',
	},
	batswarms : {
		name:'Bat Swarms (2-8)',
		role:'',
		move:'12',
		wounds:'5',
		bravery:'10',
		save:'-',
		points:'80',
		weapon : {
			'Razor-sharp Teeth' : {
				type:'melee',
				range:'3',
				attacks:'5',
				tohit:'5+',
				towound:'5+',
				rend:'-',
				damage:'1',
			},
		},
		abilities : {
			'FLY' : 'Bat Swarms can fly.',
			'Cloud of Horror' : 'Substract 1 from hit rolls for enemy units that are within 12" of any Bat Swarms in the Shooting phase.',
			'Blood Suckers' : 'At the end of any combat phase in which this unit caused any wounds to be allocated to any enemy models, you can heal all wounds that have been allocated to this unit.',
			},
		keywords:'DEATH, LEGION OF SACRAMENT, SOULBLIGHT, SUMMONABLE, BAT SWARMS',
	},
	fellbats : {
		name:'Fell Bats (3-12)',
		role:'',
		move:'14',
		wounds:'3',
		bravery:'10',
		save:'6+',
		points:'80',
		weapon : {
			'Elongated Fangs' : {
				type:'melee',
				range:'1',
				attacks:'2',
				tohit:'4+',
				towound:'4+',
				rend:'-',
				damage:'1',
			},
		},
		abilities : {
			'FLY' : 'Bat Swarms can fly.',
			'Scent of Gore' : 'If an enemy model is slain within 6" of this unit, increase the Attacks characteristic of this unit\'s Elongated Fangs to 6 for the rest of the battle.',
			},
		keywords:'DEATH, LEGION OF SACRAMENT, SOULBLIGHT, SUMMONABLE, FELL BATS',
	},
}

function getUnit(unitname){
	// console.log(units[unitname])
	return units[unitname]
}

var unitarr = ['vampirelord','batswarms','fellbats','knightofshrouds','cairnwraith','tombbanshee','wightking1','wightking2','sepulcharguard','spirithosts','hexwraiths','mortisengine']
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
	var rolename = name+' ('+role+')'
	var keywords = thisunit.keywords
	if(thisunit.role){rolename = name+' ('+role+')'}
		else{rolename = name}

	$('#page').append($('<div />',{class:'warscroll',id:unitarr[i]}))
//CHARACTERISTICS
		$('#'+unitarr[i]).append(
			$('<div />',{class:'chars'})
			.append($('<div />',{class:'name',text:rolename}))
			.append($('<div />',{class:'stats'}).append($('<div />',{class:'statsheader',text:'MOVE'})).append($('<div />',{class:'statstext',text:move})))
			.append($('<div />',{class:'stats'}).append($('<div />',{class:'statsheader',text:'WOUNDS'})).append($('<div />',{class:'statstext',text:wounds})))
			.append($('<div />',{class:'stats'}).append($('<div />',{class:'statsheader',text:'BRAVERY'})).append($('<div />',{class:'statstext',text:bravery})))
			.append($('<div />',{class:'stats'}).append($('<div />',{class:'statsheader',text:'SAVE'})).append($('<div />',{class:'statstext',text:save})))
			.append($('<div />',{class:'stats'}).append($('<div />',{class:'statsheader',text:'PTS'})).append($('<div />',{class:'statstext',text:points})))
		)
//WEAPON
		if(thisunit.weapon){
			$('#'+unitarr[i]).append($('<div />',{class:'weapon',id:unitarr[i]+'-weapon'}))

			var table1 = $('<table />')
			table1.attr('cellpadding',"0px")
			table1.attr('cellspacing','0px')
			table1.attr('width','100%')
			table1.attr('class','weapontable')
			table1.attr('id',unitarr[i]+'-weapontable-missile')
			$('#'+unitarr[i]+'-weapon').append($('<div />',{id:unitarr[i]+'-missile'}))
			$('#'+unitarr[i]+'-missile').append(table1)

			var table2 = $('<table />')
			table2.attr('cellpadding',"0px")
			table2.attr('cellspacing','0px')
			table2.attr('width','100%')
			table2.attr('class','weapontable')
			table2.attr('id',unitarr[i]+'-weapontable-melee')
			$('#'+unitarr[i]+'-weapon').append($('<div />',{id:unitarr[i]+'-melee'}))
			$('#'+unitarr[i]+'-melee').append(table2)

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
				
				var tr = $('<tr />');
				var td1 = $('<td />',{class:'weapon-name',text:name})
				var td2 = $('<td />',{class:'weapon-stats-text',text:range})
				var td3 = $('<td />',{class:'weapon-stats-text',text:attacks})
				var td4 = $('<td />',{class:'weapon-stats-text',text:tohit})
				var td5 = $('<td />',{class:'weapon-stats-text',text:towound})
				var td6 = $('<td />',{class:'weapon-stats-text',text:rend})
				var td7 = $('<td />',{class:'weapon-stats-text',text:damage})
				var weaponinfo = tr.append(td1).append(td2).append(td3).append(td4).append(td5).append(td6).append(td7)

				if(type == 'missile'){
					hasmissile = 1
					$('#'+unitarr[i]+'-weapontable-missile').append(weaponinfo)
				}
				if(type == 'melee'){
					hasmelee = 1
					$('#'+unitarr[i]+'-weapontable-melee').append(weaponinfo)
				}
			}

			//if no weapon of such type, remove appropriate header
			var tr = $('<tr />');
				var td1 = $('<td />',{class:'weapon-type',text:'type'})

				var td21 = $('<td />',{class:'weapon-stats-header',text:'RANGE"'})
				var td31 = $('<td />',{class:'weapon-stats-header',text:'attacks'})
				var td41 = $('<td />',{class:'weapon-stats-header',text:'to hit'})
				var td51 = $('<td />',{class:'weapon-stats-header',text:'to wound'})
				var td61 = $('<td />',{class:'weapon-stats-header',text:'rend'})
				var td71 = $('<td />',{class:'weapon-stats-header',text:'damage'})

				var td22 = $('<td />',{class:'weapon-stats-header',text:'RANGE"'})
				var td32 = $('<td />',{class:'weapon-stats-header',text:'attacks'})
				var td42 = $('<td />',{class:'weapon-stats-header',text:'to hit'})
				var td52 = $('<td />',{class:'weapon-stats-header',text:'to wound'})
				var td62 = $('<td />',{class:'weapon-stats-header',text:'rend'})
				var td72 = $('<td />',{class:'weapon-stats-header',text:'damage'})


			if(hasmissile == 1){$('#'+unitarr[i]+'-weapontable-missile').prepend(
				$('<tr />').append($('<td />',{class:'weapon-type',text:'MISSILE WEAPONS'})).append(td21).append(td31).append(td41).append(td51).append(td61).append(td71)
			)}
			else{$('#'+unitarr[i]+'-missile').hide()}

			if(hasmelee == 1){$('#'+unitarr[i]+'-weapontable-melee').prepend(
				$('<tr />').append($('<td />',{class:'weapon-type',text:'MELEE WEAPONS'})).append(td22).append(td32).append(td42).append(td52).append(td62).append(td72)
			)}
			else{$('#'+unitarr[i]+'-melee').hide()}
		}

//ABILITIES
		if(thisunit.abilities){
			$('#'+unitarr[i]).append($('<div />',{class:'abilities',id:unitarr[i]+'-abilities'}))
			$('#'+unitarr[i]+'-abilities').append($('<div />',{class:'header',text:'ABILITIES'}))

			var abilarr = []
			for (var c in thisunit.abilities) {
				abilarr.push(c)
			}

			var abilquantity = abilarr.length
			var table = $('<table />')
			table.attr('cellpadding',"0px")
			table.attr('cellspacing','0px')
			table.attr('width','100%')
			table.attr('class','abiltable')
			table.attr('id',unitarr[i]+'-abiltable')

			for (var s = 0; s < abilquantity; s++) {
				var thisability = abilarr[s]
				var thisabilitytext = thisunit.abilities[thisability]
				var tr = $('<tr />');
				var td1 = $('<td />',{class:'abilityheader',text:thisability})
				var td2 = $('<td />',{class:'abilitytext'}).html(thisabilitytext)
				$('#'+unitarr[i]+'-abilities').append(table.append(tr.append(td1).append(td2)))
			}
		}

//SPELL
if(thisunit.spell){
	$('#'+unitarr[i]).append($('<div />',{class:'spell',id:unitarr[i]+'-spell'}))
	var table = $('<table />')
	table.attr('cellpadding',"0px")
	table.attr('cellspacing','0px')
	table.attr('width','100%')
	table.attr('class','spelltable')
	table.attr('id',unitarr[i]+'-spelltable')
	$('#'+unitarr[i]+'-spell').append(table)
	var tr = $('<tr />');
	var td1 = $('<td />',{class:'spell-header-name',text:'SPELL'})
	var td2 = $('<td />',{class:'spell-header',text:'cast'})
	var td3 = $('<td />',{class:'spell-header',text:'range'})
	var td4 = $('<td />',{class:'spell-header',text:'target'})
	var td5 = $('<td />',{class:'spell-header',text:'effect'})
	$('#'+unitarr[i]+'-spelltable').append(tr.append(td1).append(td2).append(td3).append(td4).append(td5))

	//Add basic spells
	var basicunit = getUnit('basic')
	var spellarr = []
	for (var c in basicunit.spell) {spellarr.push(c)}
	var spellquantity = spellarr.length
	for (var s = 0; s < spellquantity; s++) {
		var name = spellarr[s]
		var cast = basicunit.spell[name].cast
		var range = basicunit.spell[name].range
		var target = basicunit.spell[name].target
		var effect = basicunit.spell[name].effect
		var tr = $('<tr />');
		var td1 = $('<td />',{class:'spell-name',text:name})
		var td2 = $('<td />',{class:'spell-text'}).html(cast)
		var td3 = $('<td />',{class:'spell-text'}).html(range)
		var td4 = $('<td />',{class:'spell-text'}).html(target)
		var td5 = $('<td />',{class:'spell-text'}).html(effect)
		$('#'+unitarr[i]+'-spelltable').append(tr.append(td1).append(td2).append(td3).append(td4).append(td5))
	}
	//Add special spells

	var spellarr = []
	for (var c in thisunit.spell) {spellarr.push(c)}
	var spellquantity = spellarr.length
	for (var s = 0; s < spellquantity; s++) {
		var name = spellarr[s]
		var cast = thisunit.spell[name].cast
		var range = thisunit.spell[name].range
		var target = thisunit.spell[name].target
		var effect = thisunit.spell[name].effect
		var tr = $('<tr />');
		var td1 = $('<td />',{class:'spell-name',text:name})
		var td2 = $('<td />',{class:'spell-text'}).html(cast)
		var td3 = $('<td />',{class:'spell-text'}).html(range)
		var td4 = $('<td />',{class:'spell-text'}).html(target)
		var td5 = $('<td />',{class:'spell-text'}).html(effect)
		$('#'+unitarr[i]+'-spelltable').append(tr.append(td1).append(td2).append(td3).append(td4).append(td5))
	}	

}

//COMMAND ABILITIES
// if(thisunit.general){}
if(thisunit.command){
	$('#'+unitarr[i]).append($('<div />',{class:'abilities',id:unitarr[i]+'-command'}))
	$('#'+unitarr[i]+'-command').append($('<div />',{class:'header',text:'Command ABILITIES'}))

//Add basic command abilities
var basicunit = getUnit('basic')
	var abilarr = []
	for (var c in basicunit.command) {
		abilarr.push(c)
	}

	var abilquantity = abilarr.length
	var table = $('<table />')
	table.attr('cellpadding',"0px")
	table.attr('cellspacing','0px')
	table.attr('width','100%')
	table.attr('class','abiltable')
	table.attr('id',unitarr[i]+'-abiltable')

	for (var s = 0; s < abilquantity; s++) {
		var thisability = abilarr[s]
		var thisabilitytext = basicunit.command[thisability]
		var tr = $('<tr />');
		var td1 = $('<td />',{class:'abilityheader',text:thisability})
		var td2 = $('<td />',{class:'abilitytext'}).html(thisabilitytext)
		$('#'+unitarr[i]+'-command').append(table.append(tr.append(td1).append(td2)))
	}

//Add special command abilities
	var abilarr = []
	for (var c in thisunit.command) {
		abilarr.push(c)
	}

	var abilquantity = abilarr.length
	var table = $('<table />')
	table.attr('cellpadding',"0px")
	table.attr('cellspacing','0px')
	table.attr('width','100%')
	table.attr('class','abiltable')
	table.attr('id',unitarr[i]+'-abiltable')

	for (var s = 0; s < abilquantity; s++) {
		var thisability = abilarr[s]
		var thisabilitytext = thisunit.command[thisability]
		var tr = $('<tr />');
		var td1 = $('<td />',{class:'abilityheader',text:thisability})
		var td2 = $('<td />',{class:'abilitytext'}).html(thisabilitytext)
		$('#'+unitarr[i]+'-command').append(table.append(tr.append(td1).append(td2)))
	}
}
// if(thisunit.general != 1 || !thisunit.general){$('#'+unitarr[i]+'-command').hide()}



//KEYWORDS
		$('#'+unitarr[i]).append($('<div />',{class:'header',text:'KEYWORDS'}))
		$('#'+unitarr[i]).append($('<div />',{class:'keywords',text:keywords}))
}