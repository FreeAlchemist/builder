/*

'' : '',

weapon : ['','','','','',''],


Assault		"A model with an Assault weapon can fire it even If it Advanced earlier that turn.
If it does so, you must substract 1 from any hit rolls made when firing that weapon this turn"												
Rapid Fire		A model firing a Rapid Fire weapon doubles the number of attacks it makes if its target is within half the weapon's maximum range												
Heavy		If a model with a Heavy weapon moved in its preceding Movement phase, you must substract 1 from any hit rolls made when firing that weapon this turn												
Pistol		"A model can fire a Pistol even if there are enemy units within 1"" of its unit, but it must target the closest enemy unit.
In such circumstances, the model can shoot its Pistol even if other friendly units are within 1"" of the same enemy unit.
Each time a model equipped with both a Pistol and another type of ranged weapon shoots, it can either shoot with its Pistol(s) or with all of its other weapons.
Chose which it will fire (Pistols or non-Pistols) before making hit rolls"												
Grenade		Each time a unit shoots, a single model in the unit that is equipped with Grenades may throw one instead of firing any other weapon												

To Wound		Toughness							
		3	4	5	6	7	8	9	10
Strength	3	4+	5+	5+	6+	6+	6+	6+	6+
	4	3+	4+	5+	5+	5+	6+	6+	6+
	5	3+	3+	4+	5+	5+	5+	5+	6+
	6	2+	3+	3+	4+	5+	5+	5+	5+
	7	2+	3+	3+	3+	4+	5+	5+	5+
	8	2+	2+	3+	3+	3+	4+	5+	5+
	10	2+	2+	2+	3+	3+	3+	3+	3+
	12	2+	2+	2+	2+	3+	3+	3+	3+
	16	2+	2+	2+	2+	2+	2+	3+	3+

*/


//Dark Angels units
	var darkangels = {
		interrogatorchaplain : {
			name:'Interrogator Chaplain',
			role:'HQ',
			move:'6',
			ws:'2+',
			bs:'3+',
			strength:'4',
			toughness:'4',
			wounds:'5',
			degradate : ['5'],
			attacks:'3',
			leadership:'9',
			save:'3+',
			invulsave:'4+',
			powerpoints:'5',
			points:'97',
			weapon : ['Crozius arcanum','Power fist','Frag grenade','Krak grenade','Bolt pistol','Boltgun'],
			abilities : {
				'Grim Resolve' : 'You can re-roll all hit rolls of 1 for this unit whenever it shoots (including when firing Overwatch) so long as it did not move in its prior Movement phase. In addition, this unit can never lose more than one model as the result of any single failed Morale test.',
				'Inner Circle' : 'This unit automatically passes Morale tests. In addition, you can re-roll failed hit rolls in the Fight phase for attacks by this unit that target a FALLEN',
				'Spiritual Leaders' : 'All friendly DARK ANGELS units within 6" of this model can use his Leadershup instead of their own.',
				'Litanies of Hate' : 'You can re-roll failed hit rolls in the Fight phase for friendly DARK ANGELS units within 6" of this model.',
				'Aura of Dread' : 'Units within 6" of an enemy INTERROGATOR-CHAPLAINS must substract 1 from their Leadership characteristic.',
				'Rozarius' : 'This model has a 4+ invulnerable save.',
				},
			factionkeywords : 'IMPERIUM, ADEPTUS ASTARTES, DARK ANGELS, DEATHWING',
			keywords:'CHARACTER, INFANTRY, CHAPLAIN, INTERROGATOR-CHAPLAIN',
		},
		deathwingterminators : {
			name:'Deathwing Terminator Squad',
			role:'Elites',
			move:'5',
			ws:'3+',
			bs:'3+',
			strength:'4',
			toughness:'4',
			wounds:'2',
			attacks:'2 (3)',
			leadership:'8 (9)',
			save:'2+',
			invulsave:'5+',
			powerpoints:'13',
			points:'227',
			weapon : ['Power sword','Power fist','Chain fist','Storm bolter','Assault cannon'],
			abilities : {
				'Grim Resolve' : 'You can re-roll all hit rolls of 1 for this unit whenever it shoots (including when firing Overwatch) so long as it did not move in its prior Movement phase. In addition, this unit can never lose more than one model as the result of any single failed Morale test.',
				'Inner Circle' : 'This unit automatically passes Morale tests. In addition, you can re-roll failed hit rolls in the Fight phase for attacks by this unit that target a FALLEN',
				'Teleport Strike' : 'During deployment, you can set up this unit in a teleportarium chamber instead of placing it on the battlefield. At the end of any of your Movement phases this unit can teleport into battle - set it up anywhere on the battlefield that is more than 9" from any enemy models.',
				'Watcher in the Dark' : 'Once per game, if an enemy psychic power affects a Deathwing Terminator Squad accompanied by a Watcher in the Dark, roll a dice. On a 3+ the power has no effect on this unit (all other targets are affected normally). Remove the Watcher in  the Dark model from play after this roll has been made, whether success or not. The Watcher in the Dark must remain as close to this unit as possible, but is otherwise ignored for all other gaming purposes. Remove him if this unit is slain.',
				'Crux Terminatus' : 'Models in this unit have a 5+ invulnerable save.',
				},
			factionkeywords : 'IMPERIUM, ADEPTUS ASTARTES, DARK ANGELS, DEATHWING',
			keywords:'INFANTRY, TERMINATOR, DEATHWING TERMINATOR SQUAD',
		},
		deathwingknights : {
			name:'Deathwing Knights',
			role:'Elites',
			move:'5',
			ws:'3+',
			bs:'3+',
			strength:'4',
			toughness:'4',
			wounds:'2',
			attacks:'2 (3)',
			leadership:'8 (9)',
			save:'2+',
			invulsave:'3+',
			powerpoints:'13',
			points:'250',
			weapon : ['Flail of the Unforgiven','Mace of Absolution'],
			abilities : {
				'Grim Resolve' : 'You can re-roll all hit rolls of 1 for this unit whenever it shoots (including when firing Overwatch) so long as it did not move in its prior Movement phase. In addition, this unit can never lose more than one model as the result of any single failed Morale test.',
				'Inner Circle' : 'This unit automatically passes Morale tests. In addition, you can re-roll failed hit rolls in the Fight phase for attacks by this unit that target a FALLEN',
				'Teleport Strike' : 'During deployment, you can set up this unit in a teleportarium chamber instead of placing it on the battlefield. At the end of any of your Movement phases this unit can teleport into battle - set it up anywhere on the battlefield that is more than 9" from any enemy models.',
				'Watcher in the Dark' : 'Once per game, if an enemy psychic power affects a Deathwing Terminator Squad accompanied by a Watcher in the Dark, roll a dice. On a 3+ the power has no effect on this unit (all other targets are affected normally). Remove the Watcher in  the Dark model from play after this roll has been made, whether success or not. The Watcher in the Dark must remain as close to this unit as possible, but is otherwise ignored for all other gaming purposes. Remove him if this unit is slain.',
				'Storm Shield' : 'Models in this unit have a 3+ invulnerable save.',
				},
			factionkeywords : 'IMPERIUM, ADEPTUS ASTARTES, DARK ANGELS, DEATHWING',
			keywords:'INFANTRY, TERMINATOR, DEATHWING KNIGHTS',
		},
		companyveterans : {
			name:'Company Veterans',
			role:'Elites',
			move:'6',
			ws:'3+',
			bs:'3+',
			strength:'4',
			toughness:'4',
			wounds:'1',
			attacks:'2 (3)',
			leadership:'8 (9)',
			save:'3+',
			invulsave:'-',
			powerpoints:'13',
			points:'227',
			weapon : ['Basic melee','Power sword','Power maul','Chain sword','Power fist','Flamer','Frag grenade','Krak grenade','Bolt pistol','Plasma pistol (Standard)','Plasma pistol (Supercharged)','Plasma gun (Standard)','Plasma gun (Supercharged)','Meltagun','Heavy bolter'],
			abilities : {
				'Grim Resolve' : 'You can re-roll all hit rolls of 1 for this unit whenever it shoots (including when firing Overwatch) so long as it did not move in its prior Movement phase. In addition, this unit can never lose more than one model as the result of any single failed Morale test.',
				'And They Shall Know No Fear' : 'You can re-roll failed Morale tests for this unit.',
				'Command Squad Bodyguard' : 'Roll a dice each time a friendly DARK ANGELS CHARACTER loses a wound whilst they are within 3" of this unit; on a 2+ a model from this squad can intercept that hit – the character does not lose a wound but this unit suffers a mortal wound.',
				},
			factionkeywords : 'IMPERIUM, ADEPTUS ASTARTES, DARK ANGELS',
			keywords:'INFANTRY, COMPANY VETERANS',
		},
		venerabledreadnought : {
			name:'Venerable Dreadnought',
			role:'Elites',
			move:'6',
			ws:'2+',
			bs:'2+',
			strength:'6',
			toughness:'7',
			wounds:'8',
			degradate : ['8'],
			attacks:'4',
			leadership:'8',
			save:'3+',
			invulsave:'-',
			powerpoints:'8',
			points:'165',
			weapon : ['Basic melee','Dreadnought combat weapon','Heavy flamer','Storm bolter','Multi-melta','Heavy plasma cannon (Standard)','Heavy plasma cannon (Supercharged)','Twin lascannon','Missile launcher - Frag missile','Missile launcher - Krak missile'],
			abilities : {
				'Grim Resolve' : 'You can re-roll all hit rolls of 1 for this unit whenever it shoots (including when firing Overwatch) so long as it did not move in its prior Movement phase. In addition, this unit can never lose more than one model as the result of any single failed Morale test.',
				'Unyielding Ancient' : 'Roll a D6 each time this model loses a wound; on a 6 the damage is ignored and that wound is not lost.',
				'Smoke Launchers' : 'Once per game, instead of shooting any weapons in the Shooting phase; until your next Shooting phase your opponent must substract 1 from all hit rolls for ranged weapons that target this vehicle.',
				'Explodes' : 'If this model is reduced to 0 wounds, roll a D6 before removing the model from the battlefield; on a 6+ each unit within 3" suffers D3 mortal wounds.',
				},
			factionkeywords : 'IMPERIUM, ADEPTUS ASTARTES, DARK ANGELS',
			keywords:'VEHICLE, DREADNOUGHT, VENERABLE DREADNOUGHT',
		},
		landraidercrusader : {
			name:'Land Raider Crusader',
			role:'Heavy',
			move:'[ 10 ][ 5 ][ 3 ]',
			ws:'6+',
			bs:'[ 3+ ][ 4+ ][ 5+ ]',
			strength:'8',
			toughness:'8',
			wounds:'[ 0-7 ][ 8-11 ][ 12-16 ]',
			degradate : ['7','4','5'],
			attacks:'[ 6 ][ D6 ][ 1 ]',
			leadership:'8',
			save:'2+',
			invulsave:'-',
			powerpoints:'16',
			points:'266',
			weapon : ['Basic melee','Hurricane bolter','Twin assault cannon','Storm bolter','Multi-melta','Hunter-killer missile'],
			abilities : {
				'Power of the Machine Spirit' : 'This model does not suffer the penalty to hit rolls for moving and firing Heavy weapons.',
				'Frag Assault Launchers' : 'Roll a D6 each time this model finishes a charge move within 1" of an enemy unit; on a 4+ that unit suffers D3 mortal wounds.',
				'Transport' : 'This model can transport 10 DARK ANGELS INFANTRY models. It cannot transport JUMP PACK, TERMINATOR or PRIMARIS models.',
				'Smoke Launchers' : 'Once per game, instead of shooting any weapons in the Shooting phase; until your next Shooting phase your opponent must substract 1 from all hit rolls for ranged weapons that target this vehicle.',
				'Explodes' : 'If this model is reduced to 0 wounds, roll a D6 before removing the model from the battlefield; on a 6+ each unit within 6" suffers D6 mortal wounds.',
				},
			factionkeywords : 'IMPERIUM, ADEPTUS ASTARTES, DARK ANGELS',
			keywords:'VEHICLE, TRANSPORT, LAND RAIDER, LAND RAIDER CRUSADER',
		},
	}

//Dark Angels units 1250
	var darkangels = {
		interrogatorchaplain : {
			name:'Interrogator Chaplain',
			role:'HQ',
			move:'6',
			ws:'2+',
			bs:'3+',
			strength:'4',
			toughness:'4',
			wounds:'5',
			degradate : ['5'],
			attacks:'3',
			leadership:'9',
			save:'3+',
			invulsave:'4+',
			powerpoints:'5',
			points:'97',
			weapon : ['Crozius arcanum','Power fist','Frag grenade','Krak grenade','Bolt pistol','Boltgun'],
			abilities : {
				'Grim Resolve' : 'You can re-roll all hit rolls of 1 for this unit whenever it shoots (including when firing Overwatch) so long as it did not move in its prior Movement phase. In addition, this unit can never lose more than one model as the result of any single failed Morale test.',
				'Inner Circle' : 'This unit automatically passes Morale tests. In addition, you can re-roll failed hit rolls in the Fight phase for attacks by this unit that target a FALLEN',
				'Spiritual Leaders' : 'All friendly DARK ANGELS units within 6" of this model can use his Leadershup instead of their own.',
				'Litanies of Hate' : 'You can re-roll failed hit rolls in the Fight phase for friendly DARK ANGELS units within 6" of this model.',
				'Aura of Dread' : 'Units within 6" of an enemy INTERROGATOR-CHAPLAINS must substract 1 from their Leadership characteristic.',
				'Rozarius' : 'This model has a 4+ invulnerable save.',
				},
			factionkeywords : 'IMPERIUM, ADEPTUS ASTARTES, DARK ANGELS, DEATHWING',
			keywords:'CHARACTER, INFANTRY, CHAPLAIN, INTERROGATOR-CHAPLAIN',
		},
		deathwingterminators : {
			name:'Deathwing Terminator Squad',
			role:'Elites',
			move:'5',
			ws:'3+',
			bs:'3+',
			strength:'4',
			toughness:'4',
			wounds:'2',
			attacks:'2 (3)',
			leadership:'8 (9)',
			save:'2+',
			invulsave:'5+',
			powerpoints:'13',
			points:'227',
			weapon : ['Power sword','Power fist','Chain fist','Storm bolter','Assault cannon'],
			abilities : {
				'Grim Resolve' : 'You can re-roll all hit rolls of 1 for this unit whenever it shoots (including when firing Overwatch) so long as it did not move in its prior Movement phase. In addition, this unit can never lose more than one model as the result of any single failed Morale test.',
				'Inner Circle' : 'This unit automatically passes Morale tests. In addition, you can re-roll failed hit rolls in the Fight phase for attacks by this unit that target a FALLEN',
				'Teleport Strike' : 'During deployment, you can set up this unit in a teleportarium chamber instead of placing it on the battlefield. At the end of any of your Movement phases this unit can teleport into battle - set it up anywhere on the battlefield that is more than 9" from any enemy models.',
				'Watcher in the Dark' : 'Once per game, if an enemy psychic power affects a Deathwing Terminator Squad accompanied by a Watcher in the Dark, roll a dice. On a 3+ the power has no effect on this unit (all other targets are affected normally). Remove the Watcher in  the Dark model from play after this roll has been made, whether success or not. The Watcher in the Dark must remain as close to this unit as possible, but is otherwise ignored for all other gaming purposes. Remove him if this unit is slain.',
				'Crux Terminatus' : 'Models in this unit have a 5+ invulnerable save.',
				},
			factionkeywords : 'IMPERIUM, ADEPTUS ASTARTES, DARK ANGELS, DEATHWING',
			keywords:'INFANTRY, TERMINATOR, DEATHWING TERMINATOR SQUAD',
		},
		companyveterans1 : {
			name:'Company Veterans',
			role:'Elites',
			move:'6',
			ws:'3+',
			bs:'3+',
			strength:'4',
			toughness:'4',
			wounds:'1',
			attacks:'2 (3)',
			leadership:'8 (9)',
			save:'3+',
			invulsave:'-',
			powerpoints:'13',
			points:'97',
			weapon : ['Basic melee','Power maul','Chain sword','Frag grenade','Krak grenade','Flamer','Bolt pistol','Plasma pistol (Standard)','Plasma pistol (Supercharged)','Plasma gun (Standard)','Plasma gun (Supercharged)'],
			abilities : {
				'Grim Resolve' : 'You can re-roll all hit rolls of 1 for this unit whenever it shoots (including when firing Overwatch) so long as it did not move in its prior Movement phase. In addition, this unit can never lose more than one model as the result of any single failed Morale test.',
				'And They Shall Know No Fear' : 'You can re-roll failed Morale tests for this unit.',
				'Command Squad Bodyguard' : 'Roll a dice each time a friendly DARK ANGELS CHARACTER loses a wound whilst they are within 3" of this unit; on a 2+ a model from this squad can intercept that hit – the character does not lose a wound but this unit suffers a mortal wound.',
				},
			factionkeywords : 'IMPERIUM, ADEPTUS ASTARTES, DARK ANGELS',
			keywords:'INFANTRY, COMPANY VETERANS',
		},
		companyveterans2 : {
			name:'Company Veterans',
			role:'Elites',
			move:'6',
			ws:'3+',
			bs:'3+',
			strength:'4',
			toughness:'4',
			wounds:'1',
			attacks:'2 (3)',
			leadership:'8 (9)',
			save:'3+',
			invulsave:'-',
			powerpoints:'13',
			points:'95',
			weapon : ['Basic melee','Power sword','Chain sword','Frag grenade','Krak grenade','Bolt pistol','Plasma pistol (Standard)','Plasma pistol (Supercharged)','Meltagun','Heavy bolter'],
			abilities : {
				'Grim Resolve' : 'You can re-roll all hit rolls of 1 for this unit whenever it shoots (including when firing Overwatch) so long as it did not move in its prior Movement phase. In addition, this unit can never lose more than one model as the result of any single failed Morale test.',
				'And They Shall Know No Fear' : 'You can re-roll failed Morale tests for this unit.',
				'Command Squad Bodyguard' : 'Roll a dice each time a friendly DARK ANGELS CHARACTER loses a wound whilst they are within 3" of this unit; on a 2+ a model from this squad can intercept that hit – the character does not lose a wound but this unit suffers a mortal wound.',
				},
			factionkeywords : 'IMPERIUM, ADEPTUS ASTARTES, DARK ANGELS',
			keywords:'INFANTRY, COMPANY VETERANS',
		},
		companyveterans3 : {
			//serg with plasma pistol n claw and 3 with boltguns
			name:'Company Veterans',
			role:'Elites',
			move:'6',
			ws:'3+',
			bs:'3+',
			strength:'4',
			toughness:'4',
			wounds:'1',
			attacks:'2 (3)',
			leadership:'8 (9)',
			save:'3+',
			invulsave:'-',
			powerpoints:'13',
			points:'72',
			weapon : ['Basic melee','Lightning claw','Frag grenade','Krak grenade','Bolt pistol','Plasma pistol (Standard)','Plasma pistol (Supercharged)','Boltgun'],
			abilities : {
				'Grim Resolve' : 'You can re-roll all hit rolls of 1 for this unit whenever it shoots (including when firing Overwatch) so long as it did not move in its prior Movement phase. In addition, this unit can never lose more than one model as the result of any single failed Morale test.',
				'And They Shall Know No Fear' : 'You can re-roll failed Morale tests for this unit.',
				'Command Squad Bodyguard' : 'Roll a dice each time a friendly DARK ANGELS CHARACTER loses a wound whilst they are within 3" of this unit; on a 2+ a model from this squad can intercept that hit – the character does not lose a wound but this unit suffers a mortal wound.',
				},
			factionkeywords : 'IMPERIUM, ADEPTUS ASTARTES, DARK ANGELS',
			keywords:'INFANTRY, COMPANY VETERANS',
		},
		venerabledreadnought1 : {
			name:'Venerable Dreadnought',
			role:'Elites',
			move:'6',
			ws:'2+',
			bs:'2+',
			strength:'6',
			toughness:'7',
			wounds:'8',
			degradate : ['8'],
			attacks:'4',
			leadership:'8',
			save:'3+',
			invulsave:'-',
			powerpoints:'8',
			points:'164',
			weapon : ['Dreadnought combat weapon','Heavy flamer','Heavy plasma cannon (Standard)','Heavy plasma cannon (Supercharged)'],
			abilities : {
				'Grim Resolve' : 'You can re-roll all hit rolls of 1 for this unit whenever it shoots (including when firing Overwatch) so long as it did not move in its prior Movement phase. In addition, this unit can never lose more than one model as the result of any single failed Morale test.',
				'Unyielding Ancient' : 'Roll a D6 each time this model loses a wound; on a 6 the damage is ignored and that wound is not lost.',
				'Smoke Launchers' : 'Once per game, instead of shooting any weapons in the Shooting phase; until your next Shooting phase your opponent must substract 1 from all hit rolls for ranged weapons that target this vehicle.',
				'Explodes' : 'If this model is reduced to 0 wounds, roll a D6 before removing the model from the battlefield; on a 6+ each unit within 3" suffers D3 mortal wounds.',
				},
			factionkeywords : 'IMPERIUM, ADEPTUS ASTARTES, DARK ANGELS',
			keywords:'VEHICLE, DREADNOUGHT, VENERABLE DREADNOUGHT',
		},
		venerabledreadnought2 : {
			name:'Venerable Dreadnought',
			role:'Elites',
			move:'6',
			ws:'2+',
			bs:'2+',
			strength:'6',
			toughness:'7',
			wounds:'8',
			degradate : ['8'],
			attacks:'4',
			leadership:'8',
			save:'3+',
			invulsave:'-',
			powerpoints:'8',
			points:'165',
			weapon : ['Basic melee','Twin lascannon','Missile launcher - Frag missile','Missile launcher - Krak missile'],
			abilities : {
				'Grim Resolve' : 'You can re-roll all hit rolls of 1 for this unit whenever it shoots (including when firing Overwatch) so long as it did not move in its prior Movement phase. In addition, this unit can never lose more than one model as the result of any single failed Morale test.',
				'Unyielding Ancient' : 'Roll a D6 each time this model loses a wound; on a 6 the damage is ignored and that wound is not lost.',
				'Smoke Launchers' : 'Once per game, instead of shooting any weapons in the Shooting phase; until your next Shooting phase your opponent must substract 1 from all hit rolls for ranged weapons that target this vehicle.',
				'Explodes' : 'If this model is reduced to 0 wounds, roll a D6 before removing the model from the battlefield; on a 6+ each unit within 3" suffers D3 mortal wounds.',
				},
			factionkeywords : 'IMPERIUM, ADEPTUS ASTARTES, DARK ANGELS',
			keywords:'VEHICLE, DREADNOUGHT, VENERABLE DREADNOUGHT',
		},
		landraidercrusader : {
			name:'Land Raider Crusader',
			role:'Heavy',
			move:'[ 10 ][ 5 ][ 3 ]',
			ws:'6+',
			bs:'[ 3+ ][ 4+ ][ 5+ ]',
			strength:'8',
			toughness:'8',
			wounds:'[ 0-7 ][ 8-11 ][ 12-16 ]',
			degradate : ['7','4','5'],
			attacks:'[ 6 ][ D6 ][ 1 ]',
			leadership:'8',
			save:'2+',
			invulsave:'-',
			powerpoints:'16',
			points:'332',
			weapon : ['Basic melee','Hurricane bolter','Twin assault cannon','Storm bolter'],
			abilities : {
				'Power of the Machine Spirit' : 'This model does not suffer the penalty to hit rolls for moving and firing Heavy weapons.',
				'Frag Assault Launchers' : 'Roll a D6 each time this model finishes a charge move within 1" of an enemy unit; on a 4+ that unit suffers D3 mortal wounds.',
				'Transport' : 'This model can transport 10 DARK ANGELS INFANTRY models. It cannot transport JUMP PACK, TERMINATOR or PRIMARIS models.',
				'Smoke Launchers' : 'Once per game, instead of shooting any weapons in the Shooting phase; until your next Shooting phase your opponent must substract 1 from all hit rolls for ranged weapons that target this vehicle.',
				'Explodes' : 'If this model is reduced to 0 wounds, roll a D6 before removing the model from the battlefield; on a 6+ each unit within 6" suffers D6 mortal wounds.',
				},
			factionkeywords : 'IMPERIUM, ADEPTUS ASTARTES, DARK ANGELS',
			keywords:'VEHICLE, TRANSPORT, LAND RAIDER, LAND RAIDER CRUSADER',
		},
	}

//Fallen units
	var fallen = {
		cypher : {
			name:'Cypher',
			role:'HQ',
			move:'7',
			ws:'2+',
			bs:'2+',
			strength:'4',
			toughness:'4',
			wounds:'5',
			degradate : ['5'],
			attacks:'4',
			leadership:'9',
			save:'3+',
			invulsave:'4+',
			powerpoints:'6',
			points:'110',
			weapon : {
				'Basic melee' : {
					range:'Melee',
					type:'Melee',
					strength:'User',
					ap:'0',
					damage:'1',
					ability:'-',
				},
				'Frag grenade' : {
					range:'6',
					type:'Grenade D6',
					strength:'3',
					ap:'0',
					damage:'1',
					ability:'-',
				},
				'Krak grenade' : {
					range:'6',
					type:'Grenade 1',
					strength:'6',
					ap:'-1',
					damage:'D3',
					ability:'-',
				},
				'Cypher\'s bolt pistol' : {
					range:'16',
					type:'Pistol 3',
					strength:'4',
					ap:'-1',
					damage:'1',
					ability:'-',
				},
				'Cypher\'s plasma pistol' : {
					range:'12',
					type:'Pistol 2',
					strength:'8',
					ap:'-3',
					damage:'2',
					ability:'-',
				},
			},
			abilities : {
				'Blazing weapons' : 'Cypher can use his pistols in your Shooting phase even if he has Advanced or Fallen Back in the same turn.',
				'Lord Cypher' : 'You can re-roll hit rolls of 1 made for friendly FALLEN units within 6" of Cypher.',
				'Mysterious Protection' : 'Cypher has a 4+ invulnerable save. In addition, roll a D6 if Cypher is slain, on roll of 2+, Cypher\'s model is still removed from play, but he is not considered to have been slain for the purposes of any mission victory conditions.',
				'No-one\'s Puppet' : 'Cypher cannot use the Daemonic Ritual ability, even though he has the Chaos and Character keywords.',
				},
			factionkeywords : 'IMPERIUM, CHAOS, FALLEN',
			keywords:'CHARACTER, INFANTRY, CYPHER',
		},
		fallen : {
			name:'Fallen',
			role:'Elites',
			move:'6',
			ws:'3+',
			bs:'3+',
			strength:'4',
			toughness:'4',
			wounds:'1',
			attacks:'2 (3)',
			leadership:'8 (9)',
			save:'3+',
			invulsave:'-',
			powerpoints:'6',
			points:'',
			weapon : {
				'Basic melee' : {
					range:'Melee',
					type:'Melee',
					strength:'User',
					ap:'0',
					damage:'1',
					ability:'-',
				},
				'Power sword' : {
					range:'Melee',
					type:'Melee',
					strength:'User',
					ap:'-3',
					damage:'1',
					ability:'-',
				},
				'Power maul' : {
					range:'Melee',
					type:'Melee',
					strength:'+2',
					ap:'-1',
					damage:'1',
					ability:'-',
				},
				'Chain sword' : {
					range:'Melee',
					type:'Melee',
					strength:'4',
					ap:'0',
					damage:'1',
					ability:'Each time the bearer fights, it can make 1 additional attack with this weapon.',
				},
				'Power fist' : {
					range:'Melee',
					type:'Melee',
					strength:'x2',
					ap:'-3',
					damage:'D3',
					ability:'When attacking with this weapon, you must substract 1 from the hit roll.',
				},
				'Lightning claw' : {
					range:'Melee',
					type:'Melee',
					strength:'User',
					ap:'-2',
					damage:'1',
					ability:'You can re-roll failed wound rolls for this weapon. If a model is armed with two lightning claws, each tome it fights it can make 1 additional attack with them.',
					//8 pts
				},

				'Flamer' : {
					range:'8',
					type:'Assault D6',
					strength:'4',
					ap:'0',
					damage:'1',
					ability:'This weapon automatically hits its target.',
				},
				'Frag grenade' : {
					range:'6',
					type:'Grenade D6',
					strength:'3',
					ap:'0',
					damage:'1',
					ability:'-',
				},
				'Krak grenade' : {
					range:'6',
					type:'Grenade 1',
					strength:'6',
					ap:'-1',
					damage:'D3',
					ability:'-',
				},
				'Bolt pistol' : {
					range:'12',
					type:'Pistol 1',
					strength:'4',
					ap:'0',
					damage:'1',
					ability:'-',
				},
				'Boltgun' : {
					range:'24',
					type:'Rapid fire 1',
					strength:'4',
					ap:'0',
					damage:'1',
					ability:'-',
				},
				'Plasma pistol (Standard)' : {
					range:'12',
					type:'Pistol 1',
					strength:'7',
					ap:'-3',
					damage:'1',
					ability:'-',
				},
				'Plasma pistol (Supercharged)' : {
					range:'12',
					type:'Pistol 1',
					strength:'8',
					ap:'-3',
					damage:'2',
					ability:'On a hit roll of 1, the bearer is slain.',
				},
				'Plasma gun (Standard)' : {
					range:'24',
					type:'Rapid fire 1',
					strength:'7',
					ap:'-3',
					damage:'1',
					ability:'-',
				},
				'Plasma gun (Supercharged)' : {
					range:'24',
					type:'Rapid fire 1',
					strength:'8',
					ap:'-3',
					damage:'2',
					ability:'On a hit roll of 1, the bearer is slain after all of this weapon\'s shots have been resolved.',
				},
				'Meltagun' : {
					range:'12',
					type:'Assault 1',
					strength:'8',
					ap:'-4',
					damage:'D6',
					ability:'If the target is within half range of this weapon, roll two dice when inflicting damage with it and discard the lowest result.',
				},
				'Heavy bolter' : {
					range:'36',
					type:'Heavy 3',
					strength:'5',
					ap:'-1',
					damage:'1',
					ability:'-',
				},
				'Autocannon' : {
					range:'48',
					type:'Heavy 2',
					strength:'7',
					ap:'-1',
					damage:'2',
					ability:'-',
				},
			},
			abilities : {
				'Fallen Angels' : 'You can re-roll hit rolls of 1 for any Fallen unit when shooting (including when firing Overwatch) as long as the unit did not move in its last Movement phase. In addition, Fallen units can never lose more than one model as the result of any single failed Morale test; any additional casualties beyond the first are ignored.',
				},
			factionkeywords : 'IMPERIUM, CHAOS, FALLEN',
			keywords:'INFANTRY',
		},
		hellbrute : {
			name:'Hellbrute',
			role:'Elites',
			move:'8',
			ws:'3+',
			bs:'3+',
			strength:'6',
			toughness:'7',
			wounds:'8',
			degradate : ['8'],
			attacks:'4',
			leadership:'8',
			save:'3+',
			invulsave:'-',
			powerpoints:'7',
			points:'',
			weapon : {
				'Basic melee' : {
					range:'Melee',
					type:'Melee',
					strength:'User',
					ap:'0',
					damage:'1',
					ability:'-',
				},
				'Hellbrute fist' : {
					range:'Melee',
					type:'Melee',
					strength:'x2',
					ap:'-3',
					damage:'3',
					ability:'-',
				},
				'Heavy flamer' : {
					range:'8',
					type:'Heavy D6',
					strength:'5',
					ap:'-1',
					damage:'1',
					ability:'This weapon automatically hits its target.',
				},
				'Combi-bolter' : {
					range:'24',
					type:'Rapid fire 2',
					strength:'4',
					ap:'0',
					damage:'1',
					ability:'-',
				},
				'Multi-melta' : {
					range:'24',
					type:'Heavy 1',
					strength:'8',
					ap:'-4',
					damage:'D6',
					ability:'If the target is within half range of this weapon, roll two dice when inflicting damage with it and discard the lowest result.',
				},
			},
			abilities : {
				'Crazed' : 'At the end of any phase in which this model suffers any unsaved wounds or mortal wounds, roll a D6. On a roll of 6, this model immediately makes a shooting attack as if it were your Shooting phase if there are no enemies within 1", or piles in and fights as if it were the Fight phase if there are enemies within 1". If there is no visible target within range, nothing happens.',
				'Battering Onslaught' : 'Add 1 to this model\'s Attacks characteristic if it is equiped with two melee weapons.',
				'Explodes' : 'If this model is reduced to 0 wounds, roll a D6 before removing the model from the battlefield; on a 6 it explodes, and each unit within 3" suffers D3 mortal wounds.',
				},
			factionkeywords : 'CHAOS, MARK OF CHAOS, HERETIC ASTARTES, LEGION',
			keywords:'VEHICLE, HELLBRUTE',
		},
	}

// //Skitarii units
// 	var skitarii = {
// 		techpriestdominus : {
// 			name:'TECH-PRIEST DOMINUS',
// 			role:'HQ',
// 			move:'6',
// 			ws:'3+',
// 			bs:'2+',
// 			strength:'4',
// 			toughness:'4',
// 			wounds:'5',
// 			attacks:'3',
// 			leadership:'8',
// 			save:'2+',
// 			invulsave:'5+',
// 			powerpoints:'7',
// 			points:'115',
// 			weapon : ['Omnissian Axe','Macrostubber','Phosphor serpenta','Volkite Blaster','Eradication ray','Eradication ray *'],
// 			abilities : {
// 				'Canticles of the Omnissiah' : 'Gain bonus in battle depending on the Canticle of the Omnissiah currently being canted.',
// 				'Masterwork Bionics' : 'At the beginning of each of your turns, this model regains D3 lost wounds.',
// 				'Autocaduceus of Arkhan Land (Arcana)' : 'At the start of each of your turns, the bearer of this relic heals 1 wound. In addition, when the bearer uses an ability to repair a friendly ADEPTUS MECHANICUS model (such as Master of Machines), you may re-roll the dice to determine how many wounds are regained.',
// 				'Master of Machines' : 'At the end of your Movement phase this model can repair a single friendly GRAIA or QUESTOR MECHANICUS model within 3" (but not itself).  GRAIA model regains D3 lost wounds; QUESTOR MECHANICUS model regains 1 lost wound. A model may not be the target of the Master of Machines ability more than once per turn.',
// 				'WARLORD TRAIT Necromechanic' : 'Each time your Warlord uses an ability to repair a friendly model, that model regains 1 additional wound.',
// 				'Lord of the Machine Cult' : 'You can re-roll hit rolls of 1 in the Shooting phase for friendly GRAIA units within 6".',
// 				'Refractor Field' : 'This model has a 5+ invulnerable save.',
// 				'GRAIA dogma: Refusal to Yield' : 'Roll a D6 each time a model with this dogma is slain or flees - on a 6 that model refuses to yield; either the wound that slew it is ignored or the model does not flee. However, GRAIA units with this dogma cannot Fall Back unless there is a friendly GRAIA CHARACTER on the battlefield.',
// 				},
// 			factionkeywords : 'IMPERIUM, ADEPTUS MECHANICUS, CULT MECHANICUS, GRAIA',
// 			keywords:'CHARACTER, INFANTRY, TECH-PRIEST, DOMINUS',
// 		},
// 		techpriestenginseer : {
// 			name:'TECH-PRIEST Enginseer',
// 			role:'HQ',
// 			move:'6',
// 			ws:'4+',
// 			bs:'4+',
// 			strength:'4',
// 			toughness:'4',
// 			wounds:'4',
// 			attacks:'2',
// 			leadership:'8',
// 			save:'3+',
// 			invulsave:'6+',
// 			powerpoints:'7',
// 			points:'35',
// 			weapon : ['Omnissian Axe','Servo-arm','Laspistol'],
// 			abilities : {
// 				'Canticles of the Omnissiah' : 'Gain bonus in battle depending on the Canticle of the Omnissiah currently being canted.',
// 				'Master of Machines' : 'At the end of your Movement phase this model can repair a single friendly GRAIA VEHICLE, ASTRA MILITARUM VEHICLE or QUESTOR MECHANICUS model within 3". If a model being repaired is a GRAIA or ASTRA MILITARUM model, it regains D3 lost wounds; if it is a QUESTOR MECHANICUS model, it regains 1 lost wound. A model may not be the target of the Master of Machines ability more than once per turn.',
// 				'Bionics' : 'This model has a 6+ invulnerable save.',
// 				'GRAIA dogma: Refusal to Yield' : 'Roll a D6 each time a model with this dogma is slain or flees - on a 6 that model refuses to yield; either the wound that slew it is ignored or the model does not flee. However, GRAIA units with this dogma cannot Fall Back unless there is a friendly GRAIA CHARACTER on the battlefield.',
// 				},
// 			factionkeywords : 'IMPERIUM, ADEPTUS MECHANICUS, CULT MECHANICUS, GRAIA',
// 			keywords:'CHARACTER, INFANTRY, TECH-PRIEST, ENGINSEER',
// 		},
// 		skitariirangers : {
// 			name:'Skitarii Rangers',
// 			role:'Troops',
// 			move:'6',
// 			ws:'4+',
// 			bs:'3+',
// 			strength:'3',
// 			toughness:'3',
// 			wounds:'1',
// 			attacks:'1 (2)',
// 			leadership:'6 (7)',
// 			save:'4+',
// 			invulsave:'6+',
// 			powerpoints:'4',
// 			points:'7',
// 			weapon : ['Basic melee','Power sword','Arc maul','Radium pistol','Arc pistol','Plasma caliver (Standard)','Plasma caliver (Supercharge)','Arc rifle','Galvanic rifle','Transuranic arquebus','Omnispex'],
// 			abilities : {
// 				'Canticles of the Omnissiah' : 'Gain bonus in battle depending on the Canticle of the Omnissiah currently being canted.',
// 				'Soldiers of the machine god' : 'This unit within range of objective marker controls it if there no enemy units with such ability else who have most models.',
// 				'Bionics' : 'All models in this unit have a 6+ invulnerable save.',
// 				'GRAIA dogma: Refusal to Yield' : 'Roll a D6 each time a model with this dogma is slain or flees - on a 6 that model refuses to yield; either the wound that slew it is ignored or the model does not flee. However, GRAIA units with this dogma cannot Fall Back unless there is a friendly GRAIA CHARACTER on the battlefield.',
// 				// 'Omnispex' : 'Enemy units do not receive the benefit to their saving throws for being in cover against attacks made by a unit that includes a model with an omnispex.',
// 				// 'Enhanced Data-tether' : 'You can re-roll failed Morale tests for unit that includes a model with enhanced data-tether.',
// 				},
// 			factionkeywords : 'IMPERIUM, ADEPTUS MECHANICUS, SKITARII, GRAIA',
// 			keywords:'INFANTRY, SKITARII RANGERS',
// 		},
// 		skitariivanguard : {
// 			name:'Skitarii Vanguard',
// 			role:'Troops',
// 			move:'6',
// 			ws:'4+',
// 			bs:'3+',
// 			strength:'3',
// 			toughness:'3',
// 			wounds:'1',
// 			attacks:'1 (2)',
// 			leadership:'6 (7)',
// 			save:'4+',
// 			invulsave:'6+',
// 			powerpoints:'4',
// 			points:'8',
// 			weapon : ['Basic melee','Power sword','Arc maul','Radium pistol','Arc pistol','Plasma caliver (Standard)','Plasma caliver (Supercharge)','Radium Carbine','Arc rifle','Transuranic arquebus','Enhanced Data-tether'],
// 			abilities : {
// 				'Canticles of the Omnissiah' : 'Gain bonus in battle depending on the Canticle of the Omnissiah currently being canted.',
// 				'Soldiers of the machine god' : 'This unit within range of objective marker controls it if there no enemy units with such ability else who have most models.',
// 				'Bionics' : 'All models in this unit have a 6+ invulnerable save.',
// 				'GRAIA dogma: Refusal to Yield' : 'Roll a D6 each time a model with this dogma is slain or flees - on a 6 that model refuses to yield; either the wound that slew it is ignored or the model does not flee. However, GRAIA units with this dogma cannot Fall Back unless there is a friendly GRAIA CHARACTER on the battlefield.',
// 				'Rad-saturation':'Reduce the toughness of enemy units (other than VEHICLES) by 1 whilst they are within 1" of any Skitarii Vanguard units.',
// 				// 'Omnispex' : 'Enemy units do not receive the benefit to their saving throws for being in cover against attacks made by a unit that includes a model with an omnispex.',
// 				// 'Enhanced Data-tether' : 'You can re-roll failed Morale tests for unit that includes a model with enhanced data-tether.',
// 				},
// 			factionkeywords : 'IMPERIUM, ADEPTUS MECHANICUS, SKITARII, GRAIA',
// 			keywords:'INFANTRY, SKITARII VANGUARD',
// 		},
// 		sicarianinfiltrators : {
// 			name:'Sicarian Infiltrators',
// 			role:'Elites',
// 			move:'8',
// 			ws:'3+',
// 			bs:'3+',
// 			strength:'4',
// 			toughness:'3',
// 			wounds:'2',
// 			attacks:'2 (3)',
// 			leadership:'6 (7)',
// 			save:'4+',
// 			invulsave:'6+',
// 			powerpoints:'6',
// 			points:'16',
// 			weapon : ['Taser Goad','Flechette blaster'],
// 			abilities : {
// 				'Canticles of the Omnissiah' : 'Gain bonus in battle depending on the Canticle of the Omnissiah currently being canted.',
// 				'GRAIA dogma: Refusal to Yield' : 'Roll a D6 each time a model with this dogma is slain or flees - on a 6 that model refuses to yield; either the wound that slew it is ignored or the model does not flee. However, GRAIA units with this dogma cannot Fall Back unless there is a friendly GRAIA CHARACTER on the battlefield.',
// 				'Neurostatic Aura':'Enemy units within 3" of any Sicarian Infiltrators must substract 1 from their Leadership.',
// 				'Infiltrators' : 'During deployment, you can set this unit up in concealment instead of placing it on the battlefield. At the end of any of your Movement phases, this unit can reveal its location - set it up anywhere on the battlefield that is more than 9" from any enemy model.',
// 				'Bionics' : 'All models in this unit have a 6+ invulnerable save.',
// 				},
// 			factionkeywords : 'IMPERIUM, ADEPTUS MECHANICUS, SKITARII, GRAIA',
// 			keywords:'INFANTRY, SICARIAN INFILTRATORS',
// 		},
// 		cyberneticadatasmith : {
// 			name:'Cybernetica Datasmith',
// 			role:'Elites',
// 			move:'6',
// 			ws:'3+',
// 			bs:'3+',
// 			strength:'4',
// 			toughness:'4',
// 			wounds:'4',
// 			attacks:'2',
// 			leadership:'8',
// 			save:'2+',
// 			invulsave:'5+',
// 			powerpoints:'3',
// 			points:'22',
// 			weapon : ['Power fist','Gamma pistol'],
// 			abilities : {
// 				'Canticles of the Omnissiah' : 'Gain bonus in battle depending on the Canticle of the Omnissiah currently being canted.',
// 				'Master of Machines' : 'At the end of your Movement phase this model can repair a single friendly Kastelan Robot within 3". That model regains D3 lost wounds. A model may not be the target of the Master of Machines ability more than once per turn.',
// 				'GRAIA dogma: Refusal to Yield' : 'Roll a D6 each time a model with this dogma is slain or flees - on a 6 that model refuses to yield; either the wound that slew it is ignored or the model does not flee. However, GRAIA units with this dogma cannot Fall Back unless there is a friendly GRAIA CHARACTER on the battlefield.',
// 				'Refractor Field' : 'This model has a 5+ invulnerable save.',
// 				},
// 			factionkeywords : 'IMPERIUM, ADEPTUS MECHANICUS, CULT MECHANICUS, GRAIA',
// 			keywords:'CHARACTER, INFANTRY, TECH-PRIEST, CYBERNETICA DATASMITH',
// 		},
// 		onagerdunecrawler : {
// 			name:'Onager Dunecrawler',
// 			role:'Heavy',
// 			move:'8 6 4',
// 			ws:'5+',
// 			bs:'3+ 4+ 5+',
// 			strength:'6',
// 			toughness:'7',
// 			wounds:'0-5 6-8 9-11',
// 			attacks:'3 D3 1',
// 			leadership:'8',
// 			save:'3+',
// 			invulsave:'5+',
// 			powerpoints:'7',
// 			points:'90',
// 			weapon : ['Basic melee','Cognis heavy stubber','Twin heavy phosphor blaster','Eradication beamer','Eradication beamer *','Neutron laser','Icarus array-Daedalus missile launcher','Icarus array-Gatling rocket launcher','Icarus array-Twin Icarus autocannon'],
// 			abilities : {
// 				'Canticles of the Omnissiah' : 'Gain bonus in battle depending on the Canticle of the Omnissiah currently being canted.',
// 				'Smoke Launchers' : 'Once per game, a model equipped with smoke launchers can use them instead of shooting any weapons in the Shooting phase; until your next Shooting phase your opponent must substract 1 from all hit rolls for ranged weapons that target this vehicle.',
// 				'Broad Spectrum Data-tether' : 'GRAIA units within 3" of any friendly models equipped with a broad spectrum data-tether at the start of the Morale phase add 1 to their Leadership for the duration of the phase.',
// 				'Crawler' : 'This model can only Advance D3", but ignores the -1 penalty to its hit rolls for moving and firing a Heavy weapon.',
// 				'Explodes' : 'If this model is reduced to 0 wounds, roll a D6 before removing the model from the battlefield; on a 6+ each unit within 6" suffers D3 mortal wounds.',
// 				'Emanatus Force Field' : 'This model has a 5+ invulnerable save. You can re-roll invulnerable saving throws of 1 for any Onager Dunecrawler if it is within 6" of at least one other friendly GRAIA Onager Dunecrawler',
// 				'GRAIA dogma: Refusal to Yield' : 'Roll a D6 each time a model with this dogma is slain or flees - on a 6 that model refuses to yield; either the wound that slew it is ignored or the model does not flee. However, GRAIA units with this dogma cannot Fall Back unless there is a friendly GRAIA CHARACTER on the battlefield.',
// 				},
// 			factionkeywords : 'IMPERIUM, ADEPTUS MECHANICUS, SKITARII, GRAIA',
// 			keywords:'VEHICLE, ONAGER DUNECRAWLER',
// 		},
// 		kastelanrobots : {
// 			name:'Kastelan Robots',
// 			role:'Heavy',
// 			move:'8',
// 			ws:'4+',
// 			bs:'4+',
// 			strength:'6',
// 			toughness:'7',
// 			wounds:'6',
// 			attacks:'3',
// 			leadership:'10',
// 			save:'3+',
// 			invulsave:'5+ against shooting',
// 			powerpoints:'12',
// 			points:'65',
// 			weapon : ['Kastelan fists','Heavy phosphor blaster','Incendine combustor'],
// 			abilities : {
// 				'Canticles of the Omnissiah' : 'Gain bonus in battle depending on the Canticle of the Omnissiah currently being canted.',
// 				'GRAIA dogma: Refusal to Yield' : 'Roll a D6 each time a model with this dogma is slain or flees - on a 6 that model refuses to yield; either the wound that slew it is ignored or the model does not flee. However, GRAIA units with this dogma cannot Fall Back unless there is a friendly GRAIA CHARACTER on the battlefield.',
// 				'Battle Protocols' : 'When this unit is set up, the Aegis Protocol (see below) is in effect. You can attempt to change the unit\'s battle protocol at the start of each of your Movement phases if there is a friendly RYZA Cybernetica Datasmith within 6". Roll a D6; on a 2+ the attempt is successful and you can select any one of the three battle protocols to take effect from the start of the next battle round. Otherwise, the attempt fails and the unit\'s current protocol remains in effect.',
// 				'Aegis Protocol' : 'Whilst this battle protocol is in effect, you can add 1 to any armour and invulnerable saving throws you make for this unit.',
// 				'Conqueror Protocol' : 'Whilst this battle protocol is in effect, this unit cannot shoot, but it can fight twice in each Fight phase instead of only once.',
// 				'Protector Protocol' : 'Whilst this battle protocol is in effect, this unit cannot move or charge, but you can double the number of shots it makes with each of its ranged weapons - i.e., the Heavy phosphor blaster\'s Type becomes Heavy 6 and Incendine combustor\'s Type becomes Heavy 2D6.',
// 				'Explodes' : 'If this model is reduced to 0 wounds, roll a D6 before removing the model from the battlefield; on a 6+ each unit within 3" suffers D3 mortal wounds.',
// 				'Repulsor Grid' : 'All models in this unit have a 5+ invulnerable save against shooting attacks. In addition, each time you roll a 6 (after re-rolls, but before modifiers) for a repulsor grid\'s invulnerable saving throw, the unit that made that attack suffers a mortal wound.',
// 				},
// 			factionkeywords : 'IMPERIUM, QUESTOR MECHANICUS, FREEBLADE',
// 			keywords:'VEHICLE, ARMIGER, ARMIGER WARGLAIVE',
// 		},
// 		armigerwarglaive : {
// 			name:'Armiger Warglaive',
// 			role:'Lord of War',
// 			move:'14 10 7',
// 			ws:'3+ 4+ 5+',
// 			bs:'3+ 4+ 5+',
// 			strength:'6',
// 			toughness:'7',
// 			wounds:'0-5 6-8 9-12',
// 			attacks:'4',
// 			leadership:'8',
// 			save:'3+',
// 			invulsave:'5+ against shooting',
// 			powerpoints:'12',
// 			points:'223',
// 			weapon : ['Reaper chain-cleaver','Meltagun','Thermal spear','Heavy stubber'],
// 			abilities : {
// 				'Vehicle Squadron' : 'The first time this unit is set up, all of its models must be placed within 6" of at least one other model in their unit. Then, each operates independently and is treated as a separate unit.',
// 				'Explodes' : 'If this model is reduced to 0 wounds, roll a D6 before removing the model from the battlefield; on a 6+  each unit within 6" suffers D3 mortal wounds.',
// 				'Ion shield' : 'This model has a 5+ invulnerable save against shooting attacks.',
// 				},
// 			factionkeywords : 'IMPERIUM, QUESTOR MECHANICUS, FREEBLADE',
// 			keywords:'VEHICLE, ARMIGER, ARMIGER WARGLAIVE',
// 		},
// 		knightwarden : {
// 			name:'Knight Warden',
// 			role:'Lord of War',
// 			move:'12 9 6',
// 			ws:'3+ 4+ 5+',
// 			bs:'3+ 4+ 5+',
// 			strength:'8',
// 			toughness:'8',
// 			wounds:'0-11 12-17 18-24',
// 			attacks:'4',
// 			leadership:'9',
// 			save:'3+',
// 			invulsave:'5+ against shooting',
// 			powerpoints:'25',
// 			points:'320',
// 			weapon : ['Titanic feet','Thunderstrike gauntlet','Heavy flamer','Meltagun','Avenger gatling cannon','Ironstorm missile pod'],
// 			abilities : {
// 				'Super-heavy Walker' : 'This model can Fall Back in the Movement phase and still shoot and/or charge in the same turn. When this model Falls Back, it can move over enemy INFANTRY models, though it must end its move more than 1" from any enemy units. In addition, this model can move and fire Heavy weapons without suffering the penalty to its hit rolls.                                                                                                                                                                                                                            Finally, this model only gains a bonus to its save for being in cover if at least half of the model is obscured from the firer.',
// 				'Explodes' : 'If this model is reduced to 0 wounds, roll a D6 before removing the model from the battlefield; on a 6+  each unit within 2D6" suffers D6 mortal wounds.',
// 				'Ion shield' : 'This model has a 5+ invulnerable save against shooting attacks.',
// 				},
// 			factionkeywords : 'IMPERIUM, QUESTOR MECHANICUS, FREEBLADE',
// 			keywords:'TITANIC, VEHICLE, KNIGHT WARDEN',
// 		},
// 	}

//Skitarii units 1250
	// var skitarii = {
	// 	techpriestdominus1 : {
	// 		name:'TECH-PRIEST DOMINUS (Warlord)',
	// 		role:'HQ',
	// 		move:'6',
	// 		ws:'3+',
	// 		bs:'2+',
	// 		strength:'4',
	// 		toughness:'4',
	// 		wounds:'5',
	// 		degradate : ['5'],
	// 		attacks:'3',
	// 		leadership:'8',
	// 		save:'2+',
	// 		invulsave:'5+',
	// 		powerpoints:'7',
	// 		points:'127',
	// 		weapon : ['Omnissian Axe','Phosphor serpenta','Eradication ray','Eradication ray *'],
	// 		abilities : {
	// 			'Canticles of the Omnissiah' : 'Gain bonus in battle depending on the Canticle of the Omnissiah currently being canted.',
	// 			'<i>1. Incarnation of the Iron Soul</i>' : 'You can re-roll failed Morale tests for affected units.',
	// 			'<i>2. Litany of the Electromancer</i>' : 'Roll a D6 for each enemy unit that is within 1" of any affected units; on a roll of 6, the unit being rolled for suffers D3 mortal wounds.',
	// 			'<i>3. Chant of the Remorseless Fist</i>' : 'You can re-roll any hit rolls of 1 for affected units in the Fight phase.',
	// 			'<i>4. Shroudpsalm</i>' : 'Affected units gain the bonus to their armour saving throws as if they were in cover. Units already in cover are unaffected.',
	// 			'<i>5. Invocation of Machine Might</i>' : 'Affected units have +1 Strength.',
	// 			'<i>6. Benediction of the Omnissiah</i>' : 'You can re-roll failed hit rolls of 1 for affected units in the Shooting phase.',
	// 			'Masterwork Bionics' : 'At the beginning of each of your turns, this model regains D3 lost wounds.',
	// 			'<i>Relic</i>: Autocaduceus of Arkhan Land' : 'At the start of each of your turns, the bearer of this relic heals 1 wound. In addition, when the bearer uses an ability to repair a friendly <b>ADEPTUS MECHANICUS</b> model (such as Master of Machines), you may re-roll the dice to determine how many wounds are regained.',
	// 			'Master of Machines' : 'At the end of your Movement phase this model can repair a single friendly <b>GRAIA</b> or <b>QUESTOR MECHANICUS</b> model within 3" (but not itself).  <b>GRAIA</b> model regains D3 lost wounds; <b>QUESTOR MECHANICUS</b> model regains 1 lost wound. A model may not be the target of the Master of Machines ability more than once per turn.',
	// 			'<i>WARLORD TRAIT</i>: Necromechanic' : 'Each time your Warlord uses an ability to repair a friendly model, that model regains 1 additional wound.',
	// 			'Lord of the Machine Cult' : 'You can re-roll hit rolls of 1 in the Shooting phase for friendly GRAIA units within 6".',
	// 			'Refractor Field' : 'This model has a 5+ invulnerable save.',
	// 			'GRAIA dogma: Refusal to Yield' : 'Roll a D6 each time a model with this dogma is slain or flees - on a 6 that model refuses to yield; either the wound that slew it is ignored or the model does not flee. However, <b>GRAIA</b> units with this dogma cannot Fall Back unless there is a friendly <b>GRAIA CHARACTER</b> on the battlefield.',
	// 			},
	// 		factionkeywords : 'IMPERIUM, ADEPTUS MECHANICUS, CULT MECHANICUS, GRAIA',
	// 		keywords:'CHARACTER, INFANTRY, TECH-PRIEST, DOMINUS',
	// 	},
	// 	techpriestdominus2 : {
	// 		name:'TECH-PRIEST DOMINUS',
	// 		role:'HQ',
	// 		move:'6',
	// 		ws:'3+',
	// 		bs:'2+',
	// 		strength:'4',
	// 		toughness:'4',
	// 		wounds:'5',
	// 		degradate : ['5'],
	// 		attacks:'3',
	// 		leadership:'8',
	// 		save:'2+',
	// 		invulsave:'5+',
	// 		powerpoints:'7',
	// 		points:'127',
	// 		weapon : ['Omnissian Axe','Macrostubber','Volkite Blaster'],
	// 		abilities : {
	// 			'Canticles of the Omnissiah' : 'Gain bonus in battle depending on the Canticle of the Omnissiah currently being canted.',
	// 			'Masterwork Bionics' : 'At the beginning of each of your turns, this model regains D3 lost wounds.',
	// 			'Master of Machines' : 'At the end of your Movement phase this model can repair a single friendly <b>GRAIA</b> or <b>QUESTOR MECHANICUS</b> model within 3" (but not itself).  <b>GRAIA</b> model regains D3 lost wounds; <b>QUESTOR MECHANICUS</b> model regains 1 lost wound. A model may not be the target of the Master of Machines ability more than once per turn.',
	// 			'Lord of the Machine Cult' : 'You can re-roll hit rolls of 1 in the Shooting phase for friendly <b>GRAIA</b> units within 6".',
	// 			'Refractor Field' : 'This model has a 5+ invulnerable save.',
	// 			// '<i>Relic</i>: Raiment of the Technomartyr' : 'Roll a dice each time the bearer of the Raiment of the Technomartyr loses a wound. On a 6 that model does not lose a wound. In addition, each time a friendly GRAIA model within 6" of the bearer fires Overwatch and you roll a 6 to hit, you can make one bonus attack for the same weapon against the charging unit (these attacks cannot generate further attacks).',
	// 			'GRAIA dogma: Refusal to Yield' : 'Roll a D6 each time a model with this dogma is slain or flees - on a 6 that model refuses to yield; either the wound that slew it is ignored or the model does not flee. However, <b>GRAIA</b> units with this dogma cannot Fall Back unless there is a friendly <b>GRAIA CHARACTER</b> on the battlefield.',
	// 			},
	// 		factionkeywords : 'IMPERIUM, ADEPTUS MECHANICUS, CULT MECHANICUS, GRAIA',
	// 		keywords:'CHARACTER, INFANTRY, TECH-PRIEST, DOMINUS',
	// 	},
	// 	techpriestenginseer : {
	// 		name:'TECH-PRIEST Enginseer',
	// 		role:'HQ',
	// 		move:'6',
	// 		ws:'4+',
	// 		bs:'4+',
	// 		strength:'4',
	// 		toughness:'4',
	// 		wounds:'4',
	// 		degradate : ['4'],
	// 		attacks:'2',
	// 		leadership:'8',
	// 		save:'3+',
	// 		invulsave:'6+',
	// 		powerpoints:'7',
	// 		points:'47',
	// 		weapon : ['Omnissian Axe','Servo-arm','Laspistol'],
	// 		abilities : {
	// 			'Canticles of the Omnissiah' : 'Gain bonus in battle depending on the Canticle of the Omnissiah currently being canted.',
	// 			'Master of Machines' : 'At the end of your Movement phase this model can repair a single friendly <b>GRAIA VEHICLE</b>, <b>ASTRA MILITARUM VEHICLE</b> or <b>QUESTOR MECHANICUS</b> model within 3". If a model being repaired is a <b>GRAIA</b> or <b>ASTRA MILITARUM</b> model, it regains D3 lost wounds; if it is a <b>QUESTOR MECHANICUS</b> model, it regains 1 lost wound. A model may not be the target of the Master of Machines ability more than once per turn.',
	// 			'Bionics' : 'This model has a 6+ invulnerable save.',
	// 			'GRAIA dogma: Refusal to Yield' : 'Roll a D6 each time a model with this dogma is slain or flees - on a 6 that model refuses to yield; either the wound that slew it is ignored or the model does not flee. However, <b>GRAIA</b> units with this dogma cannot Fall Back unless there is a friendly <b>GRAIA CHARACTER</b> on the battlefield.',
	// 			// '<i>Relic</i>: The Skull of Elder Nikola' : 'Once per game, in your Shooting phase, roll a dice for each enemy VEHICLE unit within 2D6" of the bearer; on a roll of 2+, that unit suffers a mortal wound.',
	// 			},
	// 		factionkeywords : 'IMPERIUM, ADEPTUS MECHANICUS, CULT MECHANICUS, GRAIA',
	// 		keywords:'CHARACTER, INFANTRY, TECH-PRIEST, ENGINSEER',
	// 	},
	// 	skitariirangers : {
	// 		name:'Skitarii Rangers',
	// 		role:'Troops',
	// 		move:'6',
	// 		ws:'4+',
	// 		bs:'3+',
	// 		strength:'3',
	// 		toughness:'3',
	// 		wounds:'1',
	// 		attacks:'1 (2)',
	// 		leadership:'6 (7)',
	// 		save:'4+',
	// 		invulsave:'6+',
	// 		powerpoints:'4',
	// 		points:'74',
	// 		weapon : ['Basic melee','Power sword','Arc pistol','Galvanic rifle','Transuranic arquebus','Omnispex'],
	// 		abilities : {
	// 			'Canticles of the Omnissiah' : 'Gain bonus in battle depending on the Canticle of the Omnissiah currently being canted.',
	// 			'Soldiers of the machine god' : 'This unit within range of objective marker controls it if there no enemy units with such ability else who have most models.',
	// 			'Bionics' : 'All models in this unit have a 6+ invulnerable save.',
	// 			'GRAIA dogma: Refusal to Yield' : 'Roll a D6 each time a model with this dogma is slain or flees - on a 6 that model refuses to yield; either the wound that slew it is ignored or the model does not flee. However, <b>GRAIA</b> units with this dogma cannot Fall Back unless there is a friendly <b>GRAIA CHARACTER</b> on the battlefield.',
	// 			},
	// 		factionkeywords : 'IMPERIUM, ADEPTUS MECHANICUS, SKITARII, GRAIA',
	// 		keywords:'INFANTRY, SKITARII RANGERS',
	// 	},
	// 	// sicarianinfiltrators : {
	// 	// 	name:'Sicarian Infiltrators',
	// 	// 	role:'Elites',
	// 	// 	move:'8',
	// 	// 	ws:'3+',
	// 	// 	bs:'3+',
	// 	// 	strength:'4',
	// 	// 	toughness:'3',
	// 	// 	wounds:'2',
	// 	// 	attacks:'2 (3)',
	// 	// 	leadership:'6 (7)',
	// 	// 	save:'4+',
	// 	// 	invulsave:'6+',
	// 	// 	powerpoints:'6',
	// 	// 	points:'110',
	// 	// 	weapon : ['Taser Goad','Flechette blaster'],
	// 	// 	abilities : {
	// 	// 		'Canticles of the Omnissiah' : 'Gain bonus in battle depending on the Canticle of the Omnissiah currently being canted.',
	// 	// 		'GRAIA dogma: Refusal to Yield' : 'Roll a D6 each time a model with this dogma is slain or flees - on a 6 that model refuses to yield; either the wound that slew it is ignored or the model does not flee. However, GRAIA units with this dogma cannot Fall Back unless there is a friendly GRAIA CHARACTER on the battlefield.',
	// 	// 		'Neurostatic Aura':'Enemy units within 3" of any Sicarian Infiltrators must substract 1 from their Leadership.',
	// 	// 		'Infiltrators' : 'During deployment, you can set this unit up in concealment instead of placing it on the battlefield. At the end of any of your Movement phases, this unit can reveal its location - set it up anywhere on the battlefield that is more than 9" from any enemy model.',
	// 	// 		'Bionics' : 'All models in this unit have a 6+ invulnerable save.',
	// 	// 		},
	// 	// 	factionkeywords : 'IMPERIUM, ADEPTUS MECHANICUS, SKITARII, GRAIA',
	// 	// 	keywords:'INFANTRY, SICARIAN INFILTRATORS',
	// 	// },
	// 	onagerdunecrawler : {
	// 		name:'Onager Dunecrawler',
	// 		role:'Heavy',
	// 		move:'[ 8 ][ 6 ][ 4 ]',
	// 		ws:'5+',
	// 		bs:'[ 3+ ][ 4+ ][ 5+ ]',
	// 		strength:'6',
	// 		toughness:'7',
	// 		wounds:'[ 0-5 ][ 6-8 ][ 9-11 ]',
	// 		degradate : ['5','3','4'],
	// 		attacks:'[ 3 ][ D3 ][ 1 ]',
	// 		leadership:'8',
	// 		save:'3+',
	// 		invulsave:'5+',
	// 		powerpoints:'7',
	// 		points:'135',
	// 		weapon : ['Basic melee','Cognis heavy stubber','Icarus array:','* Daedalus missile launcher','* Gatling rocket launcher','* Twin Icarus autocannon'],
	// 		abilities : {
	// 			'Canticles of the Omnissiah' : 'Gain bonus in battle depending on the Canticle of the Omnissiah currently being canted.',
	// 			'Smoke Launchers' : 'Once per game, a model equipped with smoke launchers can use them instead of shooting any weapons in the Shooting phase; until your next Shooting phase your opponent must substract 1 from all hit rolls for ranged weapons that target this vehicle.',
	// 			'Broad Spectrum Data-tether' : '<b>GRAIA</b> units within 3" of any friendly models equipped with a broad spectrum data-tether at the start of the Morale phase add 1 to their Leadership for the duration of the phase.',
	// 			'Crawler' : 'This model can only Advance D3", but ignores the -1 penalty to its hit rolls for moving and firing a Heavy weapon.',
	// 			'Explodes' : 'If this model is reduced to 0 wounds, roll a D6 before removing the model from the battlefield; on a 6+ each unit within 6" suffers D3 mortal wounds.',
	// 			'Emanatus Force Field' : 'This model has a 5+ invulnerable save. You can re-roll invulnerable saving throws of 1 for any Onager Dunecrawler if it is within 6" of at least one other friendly <b>GRAIA</b> Onager Dunecrawler',
	// 			'GRAIA dogma: Refusal to Yield' : 'Roll a D6 each time a model with this dogma is slain or flees - on a 6 that model refuses to yield; either the wound that slew it is ignored or the model does not flee. However, <b>GRAIA</b> units with this dogma cannot Fall Back unless there is a friendly <b>GRAIA CHARACTER</b> on the battlefield.',
	// 			},
	// 		factionkeywords : 'IMPERIUM, ADEPTUS MECHANICUS, SKITARII, GRAIA',
	// 		keywords:'VEHICLE, ONAGER DUNECRAWLER',
	// 	},
	// 	armigerwarglaive : {
	// 		name:'Armiger Warglaive',
	// 		role:'Lord of War',
	// 		move:'[ 14 ][ 10 ][ 7 ]',
	// 		ws:'[ 3+ ][ 4+ ][ 5+ ]',
	// 		bs:'[ 3+ ][ 4+ ][ 5+ ]',
	// 		strength:'6',
	// 		toughness:'7',
	// 		wounds:'[ 0-5 ][ 6-8 ][ 9-12 ]',
	// 		degradate : ['5','3','4'],
	// 		attacks:'4',
	// 		leadership:'8',
	// 		save:'3+',
	// 		invulsave:'5+ against shooting',
	// 		powerpoints:'12',
	// 		points:'240',
	// 		weapon : ['Reaper chain-cleaver','Meltagun','Thermal spear'],
	// 		abilities : {
	// 			'Vehicle Squadron' : 'The first time this unit is set up, all of its models must be placed within 6" of at least one other model in their unit. Then, each operates independently and is treated as a separate unit.',
	// 			'Explodes' : 'If this model is reduced to 0 wounds, roll a D6 before removing the model from the battlefield; on a 6+  each unit within 6" suffers D3 mortal wounds.',
	// 			'Ion shield' : 'This model has a 5+ invulnerable save against shooting attacks.',
	// 			},
	// 		factionkeywords : 'IMPERIUM, QUESTOR MECHANICUS, FREEBLADE',
	// 		keywords:'VEHICLE, ARMIGER, ARMIGER WARGLAIVE',
	// 	},
	// 	knightwarden : {
	// 		name:'Knight Warden',
	// 		role:'Lord of War',
	// 		move:'[ 12 ][ 9 ][ 6 ]',
	// 		ws:'[ 3+ ][ 4+ ][ 5+ ]',
	// 		bs:'[ 3+ ][ 4+ ][ 5+ ]',
	// 		strength:'8',
	// 		toughness:'8',
	// 		wounds:'[ 0-11 ][ 12-17 ][ 18-24 ]',
	// 		degradate : ['11','6','7'],
	// 		attacks:'4',
	// 		leadership:'9',
	// 		save:'3+',
	// 		invulsave:'5+ against shooting',
	// 		powerpoints:'25',
	// 		points:'500',
	// 		weapon : ['Titanic feet','Thunderstrike gauntlet','Heavy flamer','Meltagun','Avenger gatling cannon','Ironstorm missile pod'],
	// 		abilities : {
	// 			'Super-heavy Walker' : 'This model can Fall Back in the Movement phase and still shoot and/or charge in the same turn. When this model Falls Back, it can move over enemy <b>INFANTRY</b> models, though it must end its move more than 1" from any enemy units. In addition, this model can move and fire Heavy weapons without suffering the penalty to its hit rolls.                                                                                                                                                                                                                            Finally, this model only gains a bonus to its save for being in cover if at least half of the model is obscured from the firer.',
	// 			'Explodes' : 'If this model is reduced to 0 wounds, roll a D6 before removing the model from the battlefield; on a 6+  each unit within 2D6" suffers D6 mortal wounds.',
	// 			'Ion shield' : 'This model has a 5+ invulnerable save against shooting attacks.',
	// 			},
	// 		factionkeywords : 'IMPERIUM, QUESTOR MECHANICUS, FREEBLADE',
	// 		keywords:'TITANIC, VEHICLE, KNIGHT WARDEN',
	// 	},
	// }

//Skitarii units all
	// var skitariiall = {
	// 	techpriestdominus1 : {
	// 		name:'TECH-PRIEST DOMINUS (Warlord)',
	// 		role:'HQ',
	// 		move:'6',
	// 		ws:'3+',
	// 		bs:'2+',
	// 		strength:'4',
	// 		toughness:'4',
	// 		wounds:'5',
	// 		degradate : ['5'],
	// 		attacks:'3',
	// 		leadership:'8',
	// 		save:'2+',
	// 		invulsave:'5+',
	// 		powerpoints:'7',
	// 		points:'127',
	// 		weapon : ['Omnissian Axe','Phosphor serpenta','Eradication ray','Eradication ray *'],
	// 		abilities : {
	// 			'Canticles of the Omnissiah' : 'Gain bonus in battle depending on the Canticle of the Omnissiah currently being canted.',
	// 			'<i>1. Incarnation of the Iron Soul</i>' : 'You can re-roll failed Morale tests for affected units.',
	// 			'<i>2. Litany of the Electromancer</i>' : 'Roll a D6 for each enemy unit that is within 1" of any affected units; on a roll of 6, the unit being rolled for suffers D3 mortal wounds.',
	// 			'<i>3. Chant of the Remorseless Fist</i>' : 'You can re-roll any hit rolls of 1 for affected units in the Fight phase.',
	// 			'<i>4. Shroudpsalm</i>' : 'Affected units gain the bonus to their armour saving throws as if they were in cover. Units already in cover are unaffected.',
	// 			'<i>5. Invocation of Machine Might</i>' : 'Affected units have +1 Strength.',
	// 			'<i>6. Benediction of the Omnissiah</i>' : 'You can re-roll failed hit rolls of 1 for affected units in the Shooting phase.',
	// 			'Masterwork Bionics' : 'At the beginning of each of your turns, this model regains D3 lost wounds.',
	// 			'<i>Relic</i>: Autocaduceus of Arkhan Land' : 'At the start of each of your turns, the bearer of this relic heals 1 wound. In addition, when the bearer uses an ability to repair a friendly <b>ADEPTUS MECHANICUS</b> model (such as Master of Machines), you may re-roll the dice to determine how many wounds are regained.',
	// 			'Master of Machines' : 'At the end of your Movement phase this model can repair a single friendly <b>GRAIA</b> or <b>QUESTOR MECHANICUS</b> model within 3" (but not itself).  <b>GRAIA</b> model regains D3 lost wounds; <b>QUESTOR MECHANICUS</b> model regains 1 lost wound. A model may not be the target of the Master of Machines ability more than once per turn.',
	// 			'<i>WARLORD TRAIT</i>: Necromechanic' : 'Each time your Warlord uses an ability to repair a friendly model, that model regains 1 additional wound.',
	// 			'Lord of the Machine Cult' : 'You can re-roll hit rolls of 1 in the Shooting phase for friendly GRAIA units within 6".',
	// 			'Refractor Field' : 'This model has a 5+ invulnerable save.',
	// 			'GRAIA dogma: Refusal to Yield' : 'Roll a D6 each time a model with this dogma is slain or flees - on a 6 that model refuses to yield; either the wound that slew it is ignored or the model does not flee. However, <b>GRAIA</b> units with this dogma cannot Fall Back unless there is a friendly <b>GRAIA CHARACTER</b> on the battlefield.',
	// 			},
	// 		factionkeywords : 'IMPERIUM, ADEPTUS MECHANICUS, CULT MECHANICUS, GRAIA',
	// 		keywords:'CHARACTER, INFANTRY, TECH-PRIEST, DOMINUS',
	// 	},
	// 	techpriestdominus2 : {
	// 		name:'TECH-PRIEST DOMINUS',
	// 		role:'HQ',
	// 		move:'6',
	// 		ws:'3+',
	// 		bs:'2+',
	// 		strength:'4',
	// 		toughness:'4',
	// 		wounds:'5',
	// 		degradate : ['5'],
	// 		attacks:'3',
	// 		leadership:'8',
	// 		save:'2+',
	// 		invulsave:'5+',
	// 		powerpoints:'7',
	// 		points:'127',
	// 		weapon : ['Omnissian Axe','Macrostubber','Volkite Blaster'],
	// 		abilities : {
	// 			'Canticles of the Omnissiah' : 'Gain bonus in battle depending on the Canticle of the Omnissiah currently being canted.',
	// 			'Masterwork Bionics' : 'At the beginning of each of your turns, this model regains D3 lost wounds.',
	// 			'Master of Machines' : 'At the end of your Movement phase this model can repair a single friendly <b>GRAIA</b> or <b>QUESTOR MECHANICUS</b> model within 3" (but not itself).  <b>GRAIA</b> model regains D3 lost wounds; <b>QUESTOR MECHANICUS</b> model regains 1 lost wound. A model may not be the target of the Master of Machines ability more than once per turn.',
	// 			'Lord of the Machine Cult' : 'You can re-roll hit rolls of 1 in the Shooting phase for friendly <b>GRAIA</b> units within 6".',
	// 			'Refractor Field' : 'This model has a 5+ invulnerable save.',
	// 			// '<i>Relic</i>: Raiment of the Technomartyr' : 'Roll a dice each time the bearer of the Raiment of the Technomartyr loses a wound. On a 6 that model does not lose a wound. In addition, each time a friendly GRAIA model within 6" of the bearer fires Overwatch and you roll a 6 to hit, you can make one bonus attack for the same weapon against the charging unit (these attacks cannot generate further attacks).',
	// 			'GRAIA dogma: Refusal to Yield' : 'Roll a D6 each time a model with this dogma is slain or flees - on a 6 that model refuses to yield; either the wound that slew it is ignored or the model does not flee. However, <b>GRAIA</b> units with this dogma cannot Fall Back unless there is a friendly <b>GRAIA CHARACTER</b> on the battlefield.',
	// 			},
	// 		factionkeywords : 'IMPERIUM, ADEPTUS MECHANICUS, CULT MECHANICUS, GRAIA',
	// 		keywords:'CHARACTER, INFANTRY, TECH-PRIEST, DOMINUS',
	// 	},
	// 	techpriestenginseer : {
	// 		name:'TECH-PRIEST Enginseer',
	// 		role:'HQ',
	// 		move:'6',
	// 		ws:'4+',
	// 		bs:'4+',
	// 		strength:'4',
	// 		toughness:'4',
	// 		wounds:'4',
	// 		degradate : ['4'],
	// 		attacks:'2',
	// 		leadership:'8',
	// 		save:'3+',
	// 		invulsave:'6+',
	// 		powerpoints:'7',
	// 		points:'47',
	// 		weapon : ['Omnissian Axe','Servo-arm','Laspistol'],
	// 		abilities : {
	// 			'Canticles of the Omnissiah' : 'Gain bonus in battle depending on the Canticle of the Omnissiah currently being canted.',
	// 			'Master of Machines' : 'At the end of your Movement phase this model can repair a single friendly <b>GRAIA VEHICLE</b>, <b>ASTRA MILITARUM VEHICLE</b> or <b>QUESTOR MECHANICUS</b> model within 3". If a model being repaired is a <b>GRAIA</b> or <b>ASTRA MILITARUM</b> model, it regains D3 lost wounds; if it is a <b>QUESTOR MECHANICUS</b> model, it regains 1 lost wound. A model may not be the target of the Master of Machines ability more than once per turn.',
	// 			'Bionics' : 'This model has a 6+ invulnerable save.',
	// 			'GRAIA dogma: Refusal to Yield' : 'Roll a D6 each time a model with this dogma is slain or flees - on a 6 that model refuses to yield; either the wound that slew it is ignored or the model does not flee. However, <b>GRAIA</b> units with this dogma cannot Fall Back unless there is a friendly <b>GRAIA CHARACTER</b> on the battlefield.',
	// 			// '<i>Relic</i>: The Skull of Elder Nikola' : 'Once per game, in your Shooting phase, roll a dice for each enemy VEHICLE unit within 2D6" of the bearer; on a roll of 2+, that unit suffers a mortal wound.',
	// 			},
	// 		factionkeywords : 'IMPERIUM, ADEPTUS MECHANICUS, CULT MECHANICUS, GRAIA',
	// 		keywords:'CHARACTER, INFANTRY, TECH-PRIEST, ENGINSEER',
	// 	},
	// 	cyberneticadatasmith : {
	// 		name:'Cybernetica Datasmith',
	// 		role:'Elites',
	// 		move:'6',
	// 		ws:'3+',
	// 		bs:'3+',
	// 		strength:'4',
	// 		toughness:'4',
	// 		wounds:'4',
	// 		attacks:'2',
	// 		leadership:'8',
	// 		save:'2+',
	// 		invulsave:'5+',
	// 		powerpoints:'3',
	// 		points:'44',
	// 		weapon : ['Power fist','Gamma pistol'],
	// 		abilities : {
	// 			'Canticles of the Omnissiah' : 'Gain bonus in battle depending on the Canticle of the Omnissiah currently being canted.',
	// 			'Master of Machines' : 'At the end of your Movement phase this model can repair a single friendly Kastelan Robot within 3". That model regains D3 lost wounds. A model may not be the target of the Master of Machines ability more than once per turn.',
	// 			'GRAIA dogma: Refusal to Yield' : 'Roll a D6 each time a model with this dogma is slain or flees - on a 6 that model refuses to yield; either the wound that slew it is ignored or the model does not flee. However, GRAIA units with this dogma cannot Fall Back unless there is a friendly GRAIA CHARACTER on the battlefield.',
	// 			'Refractor Field' : 'This model has a 5+ invulnerable save.',
	// 			},
	// 		factionkeywords : 'IMPERIUM, ADEPTUS MECHANICUS, CULT MECHANICUS, GRAIA',
	// 		keywords:'CHARACTER, INFANTRY, TECH-PRIEST, CYBERNETICA DATASMITH',
	// 	},
	// 	skitariirangers : {
	// 		name:'Skitarii Rangers',
	// 		role:'Troops',
	// 		move:'6',
	// 		ws:'4+',
	// 		bs:'3+',
	// 		strength:'3',
	// 		toughness:'3',
	// 		wounds:'1',
	// 		attacks:'1 (2)',
	// 		leadership:'6 (7)',
	// 		save:'4+',
	// 		invulsave:'6+',
	// 		powerpoints:'4',
	// 		points:'74',
	// 		weapon : ['Basic melee','Power sword','Arc pistol','Galvanic rifle','Transuranic arquebus','Omnispex'],
	// 		abilities : {
	// 			'Canticles of the Omnissiah' : 'Gain bonus in battle depending on the Canticle of the Omnissiah currently being canted.',
	// 			'Soldiers of the machine god' : 'This unit within range of objective marker controls it if there no enemy units with such ability else who have most models.',
	// 			'Bionics' : 'All models in this unit have a 6+ invulnerable save.',
	// 			'GRAIA dogma: Refusal to Yield' : 'Roll a D6 each time a model with this dogma is slain or flees - on a 6 that model refuses to yield; either the wound that slew it is ignored or the model does not flee. However, <b>GRAIA</b> units with this dogma cannot Fall Back unless there is a friendly <b>GRAIA CHARACTER</b> on the battlefield.',
	// 			},
	// 		factionkeywords : 'IMPERIUM, ADEPTUS MECHANICUS, SKITARII, GRAIA',
	// 		keywords:'INFANTRY, SKITARII RANGERS',
	// 	},
	// 	sicarianinfiltrators : {
	// 		name:'Sicarian Infiltrators',
	// 		role:'Elites',
	// 		move:'8',
	// 		ws:'3+',
	// 		bs:'3+',
	// 		strength:'4',
	// 		toughness:'3',
	// 		wounds:'2',
	// 		attacks:'2 (3)',
	// 		leadership:'6 (7)',
	// 		save:'4+',
	// 		invulsave:'6+',
	// 		powerpoints:'6',
	// 		points:'110',
	// 		weapon : ['Taser Goad','Flechette blaster'],
	// 		abilities : {
	// 			'Canticles of the Omnissiah' : 'Gain bonus in battle depending on the Canticle of the Omnissiah currently being canted.',
	// 			'GRAIA dogma: Refusal to Yield' : 'Roll a D6 each time a model with this dogma is slain or flees - on a 6 that model refuses to yield; either the wound that slew it is ignored or the model does not flee. However, GRAIA units with this dogma cannot Fall Back unless there is a friendly GRAIA CHARACTER on the battlefield.',
	// 			'Neurostatic Aura':'Enemy units within 3" of any Sicarian Infiltrators must substract 1 from their Leadership.',
	// 			'Infiltrators' : 'During deployment, you can set this unit up in concealment instead of placing it on the battlefield. At the end of any of your Movement phases, this unit can reveal its location - set it up anywhere on the battlefield that is more than 9" from any enemy model.',
	// 			'Bionics' : 'All models in this unit have a 6+ invulnerable save.',
	// 			},
	// 		factionkeywords : 'IMPERIUM, ADEPTUS MECHANICUS, SKITARII, GRAIA',
	// 		keywords:'INFANTRY, SICARIAN INFILTRATORS',
	// 	},
	// 	onagerdunecrawler : {
	// 		name:'Onager Dunecrawler',
	// 		role:'Heavy',
	// 		move:'[ 8 ][ 6 ][ 4 ]',
	// 		ws:'5+',
	// 		bs:'[ 3+ ][ 4+ ][ 5+ ]',
	// 		strength:'6',
	// 		toughness:'7',
	// 		wounds:'[ 0-5 ][ 6-8 ][ 9-11 ]',
	// 		degradate : ['5','3','4'],
	// 		attacks:'[ 3 ][ D3 ][ 1 ]',
	// 		leadership:'8',
	// 		save:'3+',
	// 		invulsave:'5+',
	// 		powerpoints:'7',
	// 		points:'135',
	// 		weapon : ['Basic melee','Cognis heavy stubber','Icarus array:','* Daedalus missile launcher','* Gatling rocket launcher','* Twin Icarus autocannon'],
	// 		abilities : {
	// 			'Canticles of the Omnissiah' : 'Gain bonus in battle depending on the Canticle of the Omnissiah currently being canted.',
	// 			'Smoke Launchers' : 'Once per game, a model equipped with smoke launchers can use them instead of shooting any weapons in the Shooting phase; until your next Shooting phase your opponent must substract 1 from all hit rolls for ranged weapons that target this vehicle.',
	// 			'Broad Spectrum Data-tether' : '<b>GRAIA</b> units within 3" of any friendly models equipped with a broad spectrum data-tether at the start of the Morale phase add 1 to their Leadership for the duration of the phase.',
	// 			'Crawler' : 'This model can only Advance D3", but ignores the -1 penalty to its hit rolls for moving and firing a Heavy weapon.',
	// 			'Explodes' : 'If this model is reduced to 0 wounds, roll a D6 before removing the model from the battlefield; on a 6+ each unit within 6" suffers D3 mortal wounds.',
	// 			'Emanatus Force Field' : 'This model has a 5+ invulnerable save. You can re-roll invulnerable saving throws of 1 for any Onager Dunecrawler if it is within 6" of at least one other friendly <b>GRAIA</b> Onager Dunecrawler',
	// 			'GRAIA dogma: Refusal to Yield' : 'Roll a D6 each time a model with this dogma is slain or flees - on a 6 that model refuses to yield; either the wound that slew it is ignored or the model does not flee. However, <b>GRAIA</b> units with this dogma cannot Fall Back unless there is a friendly <b>GRAIA CHARACTER</b> on the battlefield.',
	// 			},
	// 		factionkeywords : 'IMPERIUM, ADEPTUS MECHANICUS, SKITARII, GRAIA',
	// 		keywords:'VEHICLE, ONAGER DUNECRAWLER',
	// 	},
	// 	kastelanrobots1 : {
	// 		name:'Kastelan Robots',
	// 		role:'Heavy',
	// 		move:'8',
	// 		ws:'4+',
	// 		bs:'4+',
	// 		strength:'6',
	// 		toughness:'7',
	// 		wounds:'6',
	// 		degradate : ['6'],
	// 		attacks:'3',
	// 		leadership:'10',
	// 		save:'3+',
	// 		invulsave:'5+ against shooting',
	// 		powerpoints:'12',
	// 		points:'121',
	// 		weapon : ['Kastelan fists','Incendine combustor'],
	// 		// base Kastelan fists and Incendine combustor
	// 		//can change Kastelan fists to 2 Heavy phosphor blasters and Incendine combustor to Heavy phosphor blaster
	// 		abilities : {
	// 			'Canticles of the Omnissiah' : 'Gain bonus in battle depending on the Canticle of the Omnissiah currently being canted.',
	// 			'GRAIA dogma: Refusal to Yield' : 'Roll a D6 each time a model with this dogma is slain or flees - on a 6 that model refuses to yield; either the wound that slew it is ignored or the model does not flee. However, GRAIA units with this dogma cannot Fall Back unless there is a friendly GRAIA CHARACTER on the battlefield.',
	// 			'Battle Protocols' : 'When this unit is set up, the Aegis Protocol (see below) is in effect. You can attempt to change the unit\'s battle protocol at the start of each of your Movement phases if there is a friendly RYZA Cybernetica Datasmith within 6". Roll a D6; on a 2+ the attempt is successful and you can select any one of the three battle protocols to take effect from the start of the next battle round. Otherwise, the attempt fails and the unit\'s current protocol remains in effect.',
	// 			'Aegis Protocol' : 'Whilst this battle protocol is in effect, you can add 1 to any armour and invulnerable saving throws you make for this unit.',
	// 			'Conqueror Protocol' : 'Whilst this battle protocol is in effect, this unit cannot shoot, but it can fight twice in each Fight phase instead of only once.',
	// 			'Protector Protocol' : 'Whilst this battle protocol is in effect, this unit cannot move or charge, but you can double the number of shots it makes with each of its ranged weapons - i.e., the Heavy phosphor blaster\'s Type becomes Heavy 6 and Incendine combustor\'s Type becomes Heavy 2D6.',
	// 			'Explodes' : 'If this model is reduced to 0 wounds, roll a D6 before removing the model from the battlefield; on a 6+ each unit within 3" suffers D3 mortal wounds.',
	// 			'Repulsor Grid' : 'All models in this unit have a 5+ invulnerable save against shooting attacks. In addition, each time you roll a 6 (after re-rolls, but before modifiers) for a repulsor grid\'s invulnerable saving throw, the unit that made that attack suffers a mortal wound.',
	// 			},
	// 		factionkeywords : 'IMPERIUM, QUESTOR MECHANICUS, FREEBLADE',
	// 		keywords:'VEHICLE, ARMIGER, ARMIGER WARGLAIVE',
	// 	},
	// 	kastelanrobots2 : {
	// 		name:'Kastelan Robots',
	// 		role:'Heavy',
	// 		move:'8',
	// 		ws:'4+',
	// 		bs:'4+',
	// 		strength:'6',
	// 		toughness:'7',
	// 		wounds:'6',
	// 		degradate : ['6'],
	// 		attacks:'3',
	// 		leadership:'10',
	// 		save:'3+',
	// 		invulsave:'5+ against shooting',
	// 		powerpoints:'12',
	// 		points:'110',
	// 		weapon : ['Heavy phosphor blaster','Heavy phosphor blaster','Heavy phosphor blaster'],
	// 		abilities : {
	// 			'Canticles of the Omnissiah' : 'Gain bonus in battle depending on the Canticle of the Omnissiah currently being canted.',
	// 			'GRAIA dogma: Refusal to Yield' : 'Roll a D6 each time a model with this dogma is slain or flees - on a 6 that model refuses to yield; either the wound that slew it is ignored or the model does not flee. However, GRAIA units with this dogma cannot Fall Back unless there is a friendly GRAIA CHARACTER on the battlefield.',
	// 			'Battle Protocols' : 'When this unit is set up, the Aegis Protocol (see below) is in effect. You can attempt to change the unit\'s battle protocol at the start of each of your Movement phases if there is a friendly RYZA Cybernetica Datasmith within 6". Roll a D6; on a 2+ the attempt is successful and you can select any one of the three battle protocols to take effect from the start of the next battle round. Otherwise, the attempt fails and the unit\'s current protocol remains in effect.',
	// 			'Aegis Protocol' : 'Whilst this battle protocol is in effect, you can add 1 to any armour and invulnerable saving throws you make for this unit.',
	// 			'Conqueror Protocol' : 'Whilst this battle protocol is in effect, this unit cannot shoot, but it can fight twice in each Fight phase instead of only once.',
	// 			'Protector Protocol' : 'Whilst this battle protocol is in effect, this unit cannot move or charge, but you can double the number of shots it makes with each of its ranged weapons - i.e., the Heavy phosphor blaster\'s Type becomes Heavy 6 and Incendine combustor\'s Type becomes Heavy 2D6.',
	// 			'Explodes' : 'If this model is reduced to 0 wounds, roll a D6 before removing the model from the battlefield; on a 6+ each unit within 3" suffers D3 mortal wounds.',
	// 			'Repulsor Grid' : 'All models in this unit have a 5+ invulnerable save against shooting attacks. In addition, each time you roll a 6 (after re-rolls, but before modifiers) for a repulsor grid\'s invulnerable saving throw, the unit that made that attack suffers a mortal wound.',
	// 			},
	// 		factionkeywords : 'IMPERIUM, QUESTOR MECHANICUS, FREEBLADE',
	// 		keywords:'VEHICLE, ARMIGER, ARMIGER WARGLAIVE',
	// 	},
	// 	armigerwarglaive1 : {
	// 		name:'Armiger Warglaive',
	// 		role:'Lord of War',
	// 		move:'[ 14 ][ 10 ][ 7 ]',
	// 		ws:'[ 3+ ][ 4+ ][ 5+ ]',
	// 		bs:'[ 3+ ][ 4+ ][ 5+ ]',
	// 		strength:'6',
	// 		toughness:'7',
	// 		wounds:'[ 0-5 ][ 6-8 ][ 9-12 ]',
	// 		degradate : ['5','3','4'],
	// 		attacks:'4',
	// 		leadership:'8',
	// 		save:'3+',
	// 		invulsave:'5+ against shooting',
	// 		powerpoints:'12',
	// 		points:'240',
	// 		weapon : ['Reaper chain-cleaver','Meltagun','Thermal spear'],
	// 		abilities : {
	// 			'Vehicle Squadron' : 'The first time this unit is set up, all of its models must be placed within 6" of at least one other model in their unit. Then, each operates independently and is treated as a separate unit.',
	// 			'Explodes' : 'If this model is reduced to 0 wounds, roll a D6 before removing the model from the battlefield; on a 6+  each unit within 6" suffers D3 mortal wounds.',
	// 			'Ion shield' : 'This model has a 5+ invulnerable save against shooting attacks.',
	// 			},
	// 		factionkeywords : 'IMPERIUM, QUESTOR MECHANICUS, FREEBLADE',
	// 		keywords:'VEHICLE, ARMIGER, ARMIGER WARGLAIVE',
	// 	},
	// 	armigerwarglaive2 : {
	// 		name:'Armiger Warglaive',
	// 		role:'Lord of War',
	// 		move:'[ 14 ][ 10 ][ 7 ]',
	// 		ws:'[ 3+ ][ 4+ ][ 5+ ]',
	// 		bs:'[ 3+ ][ 4+ ][ 5+ ]',
	// 		strength:'6',
	// 		toughness:'7',
	// 		wounds:'[ 0-5 ][ 6-8 ][ 9-12 ]',
	// 		degradate : ['5','3','4'],
	// 		attacks:'4',
	// 		leadership:'8',
	// 		save:'3+',
	// 		invulsave:'5+ against shooting',
	// 		powerpoints:'12',
	// 		points:'240',
	// 		weapon : ['Reaper chain-cleaver','Meltagun','Thermal spear'],
	// 		abilities : {
	// 			'Vehicle Squadron' : 'The first time this unit is set up, all of its models must be placed within 6" of at least one other model in their unit. Then, each operates independently and is treated as a separate unit.',
	// 			'Explodes' : 'If this model is reduced to 0 wounds, roll a D6 before removing the model from the battlefield; on a 6+  each unit within 6" suffers D3 mortal wounds.',
	// 			'Ion shield' : 'This model has a 5+ invulnerable save against shooting attacks.',
	// 			},
	// 		factionkeywords : 'IMPERIUM, QUESTOR MECHANICUS, FREEBLADE',
	// 		keywords:'VEHICLE, ARMIGER, ARMIGER WARGLAIVE',
	// 	},
	// 	knightwarden : {
	// 		name:'Knight Warden',
	// 		role:'Lord of War',
	// 		move:'[ 12 ][ 9 ][ 6 ]',
	// 		ws:'[ 3+ ][ 4+ ][ 5+ ]',
	// 		bs:'[ 3+ ][ 4+ ][ 5+ ]',
	// 		strength:'8',
	// 		toughness:'8',
	// 		wounds:'[ 0-11 ][ 12-17 ][ 18-24 ]',
	// 		degradate : ['11','6','7'],
	// 		attacks:'4',
	// 		leadership:'9',
	// 		save:'3+',
	// 		invulsave:'5+ against shooting',
	// 		powerpoints:'25',
	// 		points:'500',
	// 		weapon : ['Titanic feet','Thunderstrike gauntlet','Heavy flamer','Meltagun','Avenger gatling cannon','Ironstorm missile pod'],
	// 		abilities : {
	// 			'Super-heavy Walker' : 'This model can Fall Back in the Movement phase and still shoot and/or charge in the same turn. When this model Falls Back, it can move over enemy <b>INFANTRY</b> models, though it must end its move more than 1" from any enemy units. In addition, this model can move and fire Heavy weapons without suffering the penalty to its hit rolls.                                                                                                                                                                                                                            Finally, this model only gains a bonus to its save for being in cover if at least half of the model is obscured from the firer.',
	// 			'Explodes' : 'If this model is reduced to 0 wounds, roll a D6 before removing the model from the battlefield; on a 6+  each unit within 2D6" suffers D6 mortal wounds.',
	// 			'Ion shield' : 'This model has a 5+ invulnerable save against shooting attacks.',
	// 			},
	// 		factionkeywords : 'IMPERIUM, QUESTOR MECHANICUS, FREEBLADE',
	// 		keywords:'TITANIC, VEHICLE, KNIGHT WARDEN',
	// 	},
	// }


var army
$("#armyselect").change(function(){
		army = $("select[name='armyselect'] > option:checked").val()
		console.log(army)
	// 	// getRoster(army)
	// getUnit(faction, unitname)
})
$("#patrol-hq-1").change(function(){
		patrolhq = $("select[name='patrol-hq-1'] > option:checked").val()
		console.log(patrolhq)
})






function getUnit(faction, unitname){
	return faction[unitname]
	console.log(faction[unitname])
	//return library.[army].units[unitname]
}

function getRoster(army){
	if(army){
		console.log(unitarr.length)

		$('body').prepend($('<div />',{id:'page'}))
		var totalpoints = 0
		for (var i =0; i < unitarr.length; i++) {
			console.log(i)
			console.log(unitarr[i])
			var thisunit = getUnit(faction,unitarr[i])
			var name = thisunit.name
			var move = thisunit.move
			var ws = thisunit.ws
			var bs = thisunit.bs
			var strength = thisunit.strength
			var toughness = thisunit.toughness
			var wounds = thisunit.wounds
			var attacks = thisunit.attacks
			var leadership = thisunit.leadership
			var save = thisunit.save
			var invulsave = thisunit.invulsave
			var powerpoints = thisunit.powerpoints
			var points = thisunit.points
			var role = thisunit.role
			var rolename = name+' ('+role+')'
			var keywords = thisunit.keywords
			var factionkeywords = thisunit.factionkeywords

			totalpoints += parseInt(points)

			// if(thisunit.role){rolename = name+' ('+role+')'+' ('+powerpoints+' pp )'+' ('+points+' pts)'}
			if(thisunit.role){rolename = name+' ('+role+')'+' ('+points+' pts)'}
				else{rolename = name}

			$('#page').append($('<div />',{class:'warscroll',id:unitarr[i]}))
			//CHARACTERISTICS
				$('#'+unitarr[i]).append($('<div />',{class:'chars',id:unitarr[i]+'-chars'}))
				if(thisunit.degradate){
					$('#'+unitarr[i]+'-chars').append($('<div />',{class:'name',text:rolename}).append($('<div />',{class:'level',id:unitarr[i]+'-level'})))
					var degradatearr = thisunit.degradate
					var degradatequantity = degradatearr.length
					for (var s = 0; s < degradatequantity; s++) {
						$('#'+unitarr[i]+'-level').append($('<div />',{class:'woundlevel',id:unitarr[i]+'-level-'+s}))
						var level = parseInt(degradatearr[s])
						for (var l = 0; l < level; l++) {
							$('#'+unitarr[i]+'-level-'+s).append($('<div />',{class:'wound'}))
						};
						$('#'+unitarr[i]+'-level-'+s).append($('<div />',{class:'woundfiller'}))
					}
				}
				else{
					$('#'+unitarr[i]+'-chars').append($('<div />',{class:'name',text:rolename}))
				}

				var table = $('<table />')
				table.attr('cellpadding',"0px")
				table.attr('cellspacing','0px')
				table.attr('width','100%')
				table.attr('class','topborder')
				table.attr('id',unitarr[i]+'-statstable')
				$('#'+unitarr[i]+'-chars').append(table)
				var tr = $('<tr />');
				var td1 = $('<td />',{class:'weapon-stats-header',text:'move"'})
				var td2 = $('<td />',{class:'weapon-stats-header',text:'WS'})
				var td3 = $('<td />',{class:'weapon-stats-header',text:'BS'})
				var td4 = $('<td />',{class:'weapon-stats-header smallstat',text:'S'})
				var td5 = $('<td />',{class:'weapon-stats-header smallstat',text:'T'})
				var td6 = $('<td />',{class:'weapon-stats-header',text:'W'})
				var td7 = $('<td />',{class:'weapon-stats-header',text:'A'})
				var td8 = $('<td />',{class:'weapon-stats-header smallstat',text:'Ld'})
				var td9 = $('<td />',{class:'weapon-stats-header',text:'Sv'})
				var td10 = $('<td />',{class:'weapon-stats-header',text:'InvSv'})
				var statsinfo = tr.append(td1).append(td2).append(td3).append(td4).append(td5).append(td6).append(td7).append(td8).append(td9).append(td10)
				$('#'+unitarr[i]+'-statstable').append(statsinfo)
				var tr = $('<tr />');
				var td1 = $('<td />',{class:'weapon-stats-text',text:move})
				var td2 = $('<td />',{class:'weapon-stats-text',text:ws})
				var td3 = $('<td />',{class:'weapon-stats-text',text:bs})
				var td4 = $('<td />',{class:'weapon-stats-text smallstat',text:strength})
				var td5 = $('<td />',{class:'weapon-stats-text smallstat',text:toughness})
				var td6 = $('<td />',{class:'weapon-stats-text',text:wounds})
				var td7 = $('<td />',{class:'weapon-stats-text',text:attacks})
				var td8 = $('<td />',{class:'weapon-stats-text smallstat',text:leadership})
				var td9 = $('<td />',{class:'weapon-stats-text',text:save})
				var td10 = $('<td />',{class:'weapon-stats-text',text:invulsave})
				var statsinfo = tr.append(td1).append(td2).append(td3).append(td4).append(td5).append(td6).append(td7).append(td8).append(td9).append(td10)
				$('#'+unitarr[i]+'-statstable').append(statsinfo)

			//WEAPON
				if(thisunit.weapon){
					$('#'+unitarr[i]).append($('<div />',{class:'weapon',id:unitarr[i]+'-weapon'}))
					var table = $('<table />')
					table.attr('cellpadding',"0px")
					table.attr('cellspacing','0px')
					table.attr('width','100%')
					table.attr('class','topborder')
					table.attr('id',unitarr[i]+'-weapontable')
					$('#'+unitarr[i]+'-weapon').append(table)
					var tr = $('<tr />');
					var td1 = $('<td />',{class:'weapon-type',text:'weapon'})
					var td2 = $('<td />',{class:'weapon-stats-header smallstat',text:'rng"'})
					var td3 = $('<td />',{class:'weapon-stats-header',text:'type'})
					var td4 = $('<td />',{class:'weapon-stats-header smallstat',text:'S'})
					var td5 = $('<td />',{class:'weapon-stats-header smallstat',text:'AP'})
					var td6 = $('<td />',{class:'weapon-stats-header smallstat',text:'Dmg'})
					var td7 = $('<td />',{class:'weapon-stats-header weapon-stats-ability',text:'Ability'})
					// var td8 = $('<td />',{class:'weapon-stats-header xsmallstat',text:'Pts'})
					var weaponinfo = tr.append(td1).append(td2).append(td3).append(td4).append(td5).append(td6).append(td7)
					// var weaponinfo = tr.append(td1).append(td2).append(td3).append(td4).append(td5).append(td6).append(td7).append(td8)
					
					$('#'+unitarr[i]+'-weapontable').append(weaponinfo)
					var weaponarr = thisunit.weapon
					var weaponquantity = weaponarr.length
					for (var s = 0; s < weaponquantity; s++) {
						var name = weaponarr[s]
						// console.log(faction)
						// console.log(libfaction)
						// console.log(darkangels)
						// console.log(name)
						if(libfaction.weapons[name]){
							var tr = $('<tr />');
							var td1 = $('<td />',{class:'weapon-name',text:name})
							if(libfaction.weapons[name].range){
								var weaponrange = libfaction.weapons[name].range
								var td2 = $('<td />',{class:'weapon-stats-text smallstat',text:weaponrange})
							}
							else{
								var weaponrange = '???'
								var td2 = $('<td />',{class:'weapon-stats-text smallstat alert',text:weaponrange})
							}
							if(libfaction.weapons[name].type){
								var weapontype = libfaction.weapons[name].type
								var td3 = $('<td />',{class:'weapon-stats-text',text:weapontype})
							}
							else{
								var weapontype = '???'
								var td3 = $('<td />',{class:'weapon-stats-text alert',text:weapontype})
						}
							if(libfaction.weapons[name].strength){
								var weaponstrength = libfaction.weapons[name].strength
								var td4 = $('<td />',{class:'weapon-stats-text smallstat',text:weaponstrength})
							}
							else{
								var weaponstrength = '???'
								var td4 = $('<td />',{class:'weapon-stats-text smallstat alert',text:weaponstrength})
						}
							if(libfaction.weapons[name].ap){
								var weaponap = libfaction.weapons[name].ap
								var td5 = $('<td />',{class:'weapon-stats-text smallstat',text:weaponap})
							}
							else{
								var weaponap = '???'
								var td5 = $('<td />',{class:'weapon-stats-text smallstat alert',text:weaponap})
						}
							if(libfaction.weapons[name].damage){
								var weapondamage = libfaction.weapons[name].damage
								var td6 = $('<td />',{class:'weapon-stats-text smallstat',text:weapondamage})
							}
							else{
								var weapondamage = '???'
								var td6 = $('<td />',{class:'weapon-stats-text smallstat alert',text:weapondamage})
						}
							if(libfaction.weapons[name].ability){
								var weaponability = libfaction.weapons[name].ability
								var td7 = $('<td />',{class:'weapon-stats-text weapon-stats-ability'}).html(weaponability)
							}
							else{
								var weaponability = '???'
								var td7 = $('<td />',{class:'weapon-stats-text weapon-stats-ability alert'}).html(weaponability)
						}
							if(libfaction.weapons[name].points){
								var weaponpoints = libfaction.weapons[name].points
								var td8 = $('<td />',{class:'weapon-stats-text xsmallstat',text:weaponpoints})
							}
							else{
								var weaponpoints = '???'
								var td8 = $('<td />',{class:'weapon-stats-text xsmallstat alert',text:weaponpoints})
						}
						}
						else{
							console.log(name+' : NO DATA FOUND')
							var weaponrange = '???'
							var weapontype = '???'
							var weaponstrength = '???'
							var weaponap = '???'
							var weapondamage = '???'
							weaponability = '???'
							var weaponpoints = '???'
							var tr = $('<tr />');
							var td1 = $('<td />',{class:'weapon-name alert',text:name})
							var td2 = $('<td />',{class:'weapon-stats-text smallstat alert',text:weaponrange})
							var td3 = $('<td />',{class:'weapon-stats-text alert',text:weapontype})
							var td4 = $('<td />',{class:'weapon-stats-text smallstat alert',text:weaponstrength})
							var td5 = $('<td />',{class:'weapon-stats-text smallstat alert',text:weaponap})
							var td6 = $('<td />',{class:'weapon-stats-text smallstat alert',text:weapondamage})
							var td7 = $('<td />',{class:'weapon-stats-text weapon-stats-ability alert'}).html(weaponability)
							// var td8 = $('<td />',{class:'weapon-stats-text xsmallstat alert',text:weaponpoints})
						}
						var weaponinfo = tr.append(td1).append(td2).append(td3).append(td4).append(td5).append(td6).append(td7)
						// var weaponinfo = tr.append(td1).append(td2).append(td3).append(td4).append(td5).append(td6).append(td7).append(td8)
						$('#'+unitarr[i]+'-weapontable').append(weaponinfo)
					}
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
					table.attr('id',unitarr[i]+'-abiltable')
					for (var s = 0; s < abilquantity; s++) {
						var thisability = abilarr[s]
						var thisabilitytext = thisunit.abilities[thisability]
						var tr = $('<tr />');
						var td1 = $('<td />',{class:'abilityheader'}).html(thisability)
						var td2 = $('<td />',{class:'abilitytext'}).html(thisabilitytext)
						$('#'+unitarr[i]+'-abilities').append(table.append(tr.append(td1).append(td2)))
					}
				}

			//KEYWORDS
				$('#'+unitarr[i]).append($('<div />',{class:'abilities',id:unitarr[i]+'-keywords'}))
				var table = $('<table />')
				table.attr('cellpadding',"0px")
				table.attr('cellspacing','0px')
				table.attr('width','100%')
				table.attr('class','topborder')
				table.attr('id',unitarr[i]+'-keywordstable')
				var tr = $('<tr />');
				var td1 = $('<td />',{class:'abilityheader table-header',text:'FACTION KEYWORDS'})
				var td2 = $('<td />',{class:'abilitytext'}).html(factionkeywords)
				$('#'+unitarr[i]+'-keywords').append(table.append(tr.append(td1).append(td2)))
				var tr = $('<tr />');
				var td1 = $('<td />',{class:'abilityheader table-header',text:'KEYWORDS'})
				var td2 = $('<td />',{class:'abilitytext'}).html(keywords)
				$('#'+unitarr[i]+'-keywords').append(table.append(tr.append(td1).append(td2)))
		}	
	}
// $('#page').append('total points: '+totalpoints)
}



function armyList(library){
	var arr = []
	for (p in library){
		arr.push(p)
	}
	for(var i = 0; i < arr.length; i++){
		if(library[arr[i]]){
			var option = $('<option />')
			option.attr('value',arr[i])
			if(i == 0){
				option.attr('selected','selected')
				army = arr[i]
				console.log(army)
			}
			option.attr('label',library[arr[i]].armyname)
				$('#armyselect').append(option)
		}
	}
}

armyList(library)

// var army = 'darkangels'
// var army = 'fallen'
// var army = 'skitarii'

if(army && army == 'darkangels'){
	var faction = darkangels
	var libfaction = library.darkangels
	// var unitarr = ['interrogatorchaplain','companyveterans','deathwingterminators','deathwingknights','venerabledreadnought','landraidercrusader']
	var unitarr = ['interrogatorchaplain','landraidercrusader','companyveterans1','companyveterans2','companyveterans3','deathwingterminators','venerabledreadnought1','venerabledreadnought2']
}
if(army && army == 'fallen'){
	var faction = fallen
	var libfaction = library.fallen
	var unitarr = ['cypher','fallen','hellbrute']
}
if(army && army == 'skitarii'){
	// var faction = skitarii
	var libfaction = library.skitarii
	// var unitarr = ['techpriestdominus','techpriestenginseer','skitariirangers','skitariivanguard','sicarianinfiltrators','cyberneticadatasmith','onagerdunecrawler','kastelanrobots','armigerwarglaive','knightwarden']
	// var unitarr = ['techpriestdominus','techpriestenginseer','skitariirangers','skitariivanguard','onagerdunecrawler','armigerwarglaive','knightwarden']
	var unitarr = ['techpriestdominus1','techpriestdominus2','techpriestenginseer','armigerwarglaive','knightwarden','skitariirangers','onagerdunecrawler']
	// var unitarr = ['techpriestdominus1','techpriestdominus2','techpriestenginseer','cyberneticadatasmith','kastelanrobots1','kastelanrobots2','armigerwarglaive1','armigerwarglaive2','knightwarden','skitariirangers','onagerdunecrawler']
	// var unitarr = ['skitariirangers','onagerdunecrawler']
	// var unitarr = ['armigerwarglaive','knightwarden']
	// var unitarr = ['knightwarden']
}

console.log(faction)
console.log(libfaction)
console.log(library[army])
console.log(library[army].units)
console.log(library[army].units.techpriestenginseer)
console.log(library[army].units[unitarr[3]])
console.log(library[army].units[unitarr[3]].role)

console.log(unitarr)

var unitarr = []
var hqarr = []
var troopsarr = []
var elitesarr = []
var fastarr = []
var heavyarr = []
var flyersarr = []
var dedicatedarr = []
var lowarr = []
var fortificationarr = []

for(p in library[army].units){
	unitarr.push(p)
}
console.log(unitarr)
for (var i =0; i < unitarr.length; i++) {
	console.log(i)
	// console.log(unitarr[i])
	var thisunit = library[army].units[unitarr[i]]
	console.log('thisunit:'+thisunit.name)
	console.log(thisunit)
	var role = thisunit.role
	console.log('role: '+role)
	if(role == 'HQ'){hqarr.push(unitarr[i])}
	if(role == 'Troops'){troopsarr.push(unitarr[i])}
	if(role == 'Elites'){elitesarr.push(unitarr[i])}
	if(role == 'Fast'){fastarr.push(unitarr[i])}
	if(role == 'Heavy'){heavyarr.push(unitarr[i])}
	if(role == 'Flyers'){flyersarr.push(unitarr[i])}
	if(role == 'Dedicated Transport'){dedicatedarr.push(unitarr[i])}
	if(role == 'Lord of War'){lowarr.push(unitarr[i])}
	if(role == 'Fortification'){fortificationarr.push(unitarr[i])}
}

console.log('hqarr')
console.log(hqarr)
console.log('troopsarr')
console.log(troopsarr)
console.log('elitesarr')
console.log(elitesarr)
console.log('fastarr')
console.log(fastarr)
console.log('heavyarr')
console.log(heavyarr)
console.log('flyersarr')
console.log(flyersarr)
console.log('dedicatedarr')
console.log(dedicatedarr)
console.log('lowarr')
console.log(lowarr)
console.log('fortificationarr')
console.log(fortificationarr)

console.log(elitesarr[0])
console.log(library[army].units[elitesarr[0]])
detachments = {
	patrol : {
		name : 'Patrol',
		cp : '0',
		hq : [1,2],
		troops : [1,3],
		elites : [0,2],
		fast : [0,2],
		heavy : [0,2],
		flyers : [0,2],
		dedicated : '1 per each choice',
		low : [0,0],
		fortification : [0,0],
	},
	battalion : {
		name : 'Battalion',
		cp : '+3',
		hq : [2,3],
		troops : [3,6],
		elites : [0,6],
		fast : [0,3],
		heavy : [0,3],
		flyers : [0,2],
		dedicated : '1 per each choice',
		low : [0,0],
		fortification : [0,0],
	},
	brigade : {
		name : 'Brigade',
		cp : '+9',
		hq : [3,5],
		troops : [6,12],
		elites : [3,8],
		fast : [3,5],
		heavy : [3,5],
		flyers : [0,2],
		dedicated : '1 per each choice',
		low : [0,0],
		fortification : [0,0],
	},
	vanguard : {
		name : 'Vanguard',
		cp : '+1',
		hq : [1,2],
		troops : [0,3],
		elites : [3,6],
		fast : [0,2],
		heavy : [0,2],
		flyers : [0,2],
		dedicated : '1 per each choice',
		low : [0,0],
		fortification : [0,0],
	},
	spearhead : {
		name : 'Spearhead',
		cp : '+1',
		hq : [1,2],
		troops : [0,3],
		elites : [0,2],
		fast : [0,2],
		heavy : [3,6],
		flyers : [0,2],
		dedicated : '1 per each choice',
		low : [0,0],
		fortification : [0,0],
	},
	outrider : {
		name : 'Outrider',
		cp : '+1',
		hq : [1,2],
		troops : [0,3],
		elites : [0,2],
		fast : [3,6],
		heavy : [0,2],
		flyers : [0,2],
		dedicated : '1 per each choice',
		low : [0,0],
		fortification : [0,0],
	},
	supreme : {
		name : 'Supreme command',
		cp : '+1',
		hq : [3,5],
		troops : [0,1],
		elites : [0,0],
		fast : [0,0],
		heavy : [0,0],
		flyers : [0,0],
		dedicated : [0,0],
		low : [0,1],
		fortification : [0,0],
	},
	superheavy : {
		name : 'Super heavy',
		cp : '+3',
		hq : [0,0],
		troops : [0,0],
		elites : [0,0],
		fast : [0,0],
		heavy : [0,0],
		flyers : [0,0],
		dedicated : [0,0],
		low : [3,5],
		fortification : [0,0],
	},
	airwing : {
		name : 'Air wing',
		cp : '+1',
		hq : [0,0],
		troops : [0,0],
		elites : [0,0],
		fast : [0,0],
		heavy : [0,0],
		flyers : [3,5],
		dedicated : [0,0],
		low : [0,0],
		fortification : [0,0],
	},
	superheavyaux : {
		name : 'Super heavy Aux',
		cp : '0',
		hq : [0,0],
		troops : [0,0],
		elites : [0,0],
		fast : [0,0],
		heavy : [0,0],
		flyers : [0,0],
		dedicated : [0,0],
		low : [1,1],
		fortification : [0,0],
	},
	fortificationnetwork : {
		name : 'Fortification network',
		cp : '0',
		hq : [0,0],
		troops : [0,0],
		elites : [0,0],
		fast : [0,0],
		heavy : [0,0],
		flyers : [0,0],
		dedicated : [0,0],
		low : [0,0],
		fortification : [1,3],
	},
	auxsupport : {
		name : 'Aux support',
		cp : '-1',
		hq : [0,1], //or
		troops : [0,1],//or
		elites : [0,1],//or
		fast : [0,1],//or
		heavy : [0,1],//or
		flyers : [0,1],//or
		dedicated : [0,1],//or
		low : [0,0],
		fortification : [0,0],
	},
}
// var detachmentsarr = ['patrol','battalion','brigade','vanguard','spearhead','outrider','supreme','superheavy','airwing','superheavyaux','fortificationnetwork','auxsupport']
var detachmentsarr = []
for(p in detachments){
	detachmentsarr.push(p)
}
console.log(detachmentsarr)
var roles = ['hq','troops','elites','fast','heavy','flyers','dedicated','low','fortification']

for (var i =0; i < detachmentsarr.length; i++) {
	console.log(detachments[detachmentsarr[i]])
}






//patrol-hq-1

