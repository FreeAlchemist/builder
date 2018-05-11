var army
$("#legionselect").change(function(){
		army = $("select[name='legionselect'] > option:checked").val()
		getLegion(army)
})
function legionsList(legions){
	var arr = []
	for (p in legions){
		arr.push(p)
	}
	for(var i = 0; i < arr.length; i++){
		if(legions[arr[i]]){
			var option = $('<option />')
			option.attr('value',arr[i])
			if(i == 0){
				option.attr('selected','selected')
				army = arr[i]
			}
			option.attr('label',legions[arr[i]].armyname)
				option.appendTo($('#legionselect'))
		}
	}
}

function getAbility(abilityname){
	if(ability[abilityname]){
		return ability[abilityname]
	}
}

function formTable(ruletype){
	var rule = ruletype
		var wrap = $('<div />',{id:rule+"_wrap", class:"wrap noprint",title:rule,text:rule})
		wrap.click(function(){
			$("#"+rule+"relicstable tr").toggle()
		})
		var table = $('<table />')
		table.attr('cellpadding',"0px")
		table.attr('cellspacing','0px')
		table.attr('width','100%')
		table.attr('class','topborder warscroll')
		table.attr('id',rule+'table')
		$('#page').append(table.append(wrap))
		var arr = []
		if(rule == 'commandability'){arr = commandabilityarr}
		if(rule == 'battletraits'){arr = battletraitsarr}
		if(rule == 'commandtraits'){arr = commandtraitsarr}
		if(rule == 'artefacts'){arr = artefactsarr}
		var quantity = arr.length
		var tr = $('<tr />')
		var input = $('<input />',{type:'checkbox',name:rule+'table',value:rule+'table',class:'noprint floatright'})
		var td1 = $('<td />',{colspan:'2', class:'army-header'}).html(rule+'<span class="noprint floatright">Print</span>').append(input)
		input.change(function(){printToggle()})
		var info = tr.append(td1)
		$('#'+rule+'table').append(info)
		for (var s = 0; s < quantity; s++) {
			var thisrule = arr[s]
			var thisruletext
			if(rule == 'commandability'){thisruletext = legions[army].commandability[thisrule]}
			if(rule == 'battletraits'){thisruletext = legions[army].battletraits[thisrule]}
			if(rule == 'commandtraits'){thisruletext = legions[army].commandtraits[thisrule]}
			if(rule == 'artefacts'){thisruletext = legions[army].artefacts[thisrule]}
			if(getAbility(thisrule)){thisruletext = getAbility(thisrule)}
			var tr = $('<tr />',{class:'noprint',id:rule+'-'+(s+1)})
			var input = $('<input />',{type:'checkbox',name:rule+'table',value:rule+'-'+(s+1),class:'noprint'})
			var td1 = $('<td />',{class:'abilityheader'}).html(thisrule).prepend(input)
			var td2 = $('<td />',{class:'abilitytext'}).html(thisruletext)
			var info = tr.append(td1).append(td2)
			$('#'+rule+'table').append(info)
			input.change(function(){
				printToggle()
			})
		}
}

function getLegion(army){

	if(army){
		$('#page').html('')
		// console.log(army)

		commandabilityarr = []
		battletraitsarr = []
		commandtraitsarr = []
		artefactsarr = []
		legion = legions[army]

		// console.log(legion.armyname)

		if(legion.commandability){
			for (var c in legion.commandability) {
				commandabilityarr.push(c)
			}
			// Print(commandabilityarr)
			formTable('commandability')
		}
		if(legion.battletraits){
			for (var c in legion.battletraits) {
				battletraitsarr.push(c)
			}
			// Print(battletraitsarr)
			formTable('battletraits')
		}
		if(legion.commandtraits){
			for (var c in legion.commandtraits) {
				commandtraitsarr.push(c)
			}
			// Print(commandtraitsarr)
			formTable('commandtraits')
		}
		if(legion.artefacts){
			for (var c in legion.artefacts) {
				artefactsarr.push(c)
			}
			// Print(artefactsarr)
			formTable('artefacts')

		}	
	}
}

function getUnit(unitname){
	// console.log(units[unitname])
	return units[unitname]
}

function unitsList(){
	var unitarr = ['vampirelord','batswarms','fellbats','knightofshrouds','cairnwraith','tombbanshee','wightking1','wightking2','sepulcharguard','spirithosts','hexwraiths','mortisengine']
	console.log(unitarr.length)
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

}

legionsList(legions)
getLegion(army)
// unitsList()