var unitarr = []
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
		$("#"+rule+"table tr").toggle()
	})
	var table = $('<table />')
	table.attr('cellpadding',"0px")
	table.attr('cellspacing','0px')
	table.attr('width','100%')
	table.attr('class','topborder warscroll')
	table.attr('id',rule+'table')
	$('#legionpage').append(table.append(wrap))
	var arr = []
	if(rule == 'commandability'){
		arr = commandabilityarr
		thisrulename = 'Command Ability'
	}
	if(rule == 'battletraits'){
		arr = battletraitsarr
		thisrulename = 'Battle traits'
	}
	if(rule == 'commandtraits'){
		arr = commandtraitsarr
		thisrulename = 'Command Traits'
	}
	if(rule == 'artefacts'){
		arr = artefactsarr
		thisrulename = 'Artefacts'
	}
	var quantity = arr.length
	var tr = $('<tr />')
	var input = $('<input />',{type:'checkbox',name:rule+'table',value:rule+'table',class:'noprint floatright'})
	var td1 = $('<td />',{colspan:'2', class:'army-header'}).html(thisrulename+'<span class="noprint floatright">Print</span>').append(input)
	input.change(function(){printToggle()})
	var info = tr.append(td1)
	$('#'+rule+'table').append(info)
	for (var s = 0; s < quantity; s++) {
		var thisrule = arr[s]
		var thisruletext
		var thisrulename
		if(rule == 'commandability'){
			thisruletext = legions[army].commandability[thisrule]
		}
		if(rule == 'battletraits'){
			thisruletext = legions[army].battletraits[thisrule]
		}
		if(rule == 'commandtraits'){
			thisruletext = legions[army].commandtraits[thisrule]
		}
		if(rule == 'artefacts'){
			thisruletext = legions[army].artefacts[thisrule]
		}
		if(getAbility(thisrule)){thisruletext = getAbility(thisrule)}

		if(rule == 'commandability' || rule == 'battletraits'){
			var tr = $('<tr />',{id:rule+'-'+(s+1)})
			var td1 = $('<td />',{class:'abilityheader'}).html(thisrule)
			var td2 = $('<td />',{class:'abilitytext'}).html(thisruletext)
			var info = tr.append(td1).append(td2)
			$('#'+rule+'table').append(info)
		}
		else{
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
	printToggle()
}

function getLegion(army){
	if(army){
		$('#legionpage').html('')
		$('#page').html('')
		$('#rosterpoints').html('')
		$('#rosterunits').html('')
		$('#rostertotalunits').html('')
		unitsMenu()
		commandabilityarr = []
		battletraitsarr = []
		commandtraitsarr = []
		artefactsarr = []
		legion = legions[army]
		var table = $('<table />')
		table.attr('cellpadding',"0px")
		table.attr('cellspacing','0px')
		table.attr('width','100%')
		table.attr('class','topborder warscroll')
		table.attr('id','rostertable')
		var tr1 = $('<tr />')
		var td1 = $('<td />',{rowspan:'2',class:'army-header legionname'}).html(legion.armyname)
		var td2 = $('<td />',{class:'army-header smallstat'}).html('Points')
		var td3 = $('<td />',{class:'army-header'}).html('units')
		var td4 = $('<td />',{class:'army-header smallstat'}).html('total units')
		var td5 = $('<td />',{class:'army-header noprint'})
		var info = tr1.append(td1).append(td2).append(td3).append(td4).append(td5)
		table.append(info)
		var tr2 = $('<tr />')
		var td1 = $('<td />',{class:'army-text smallstat',id:'rosterpoints'})
		var td2 = $('<td />',{class:'army-text',id:'rosterunits'})
		var td3 = $('<td />',{class:'army-text smallstat',id:'rostertotalunits'})
		var td4 = $('<td />',{class:'army-text noprint'})
		var info = tr2.append(td1).append(td2).append(td3).append(td4)
		table.append(info)
		$('#legionpage').append(table.append(table))

		if(legion.commandability){
			for (var c in legion.commandability) {
				commandabilityarr.push(c)
			}
			formTable('commandability')
		}
		if(legion.battletraits){
			for (var c in legion.battletraits) {
				battletraitsarr.push(c)
			}
			formTable('battletraits')
		}
		if(legion.commandtraits){
			for (var c in legion.commandtraits) {
				commandtraitsarr.push(c)
			}
			formTable('commandtraits')
		}
		if(legion.artefacts){
			for (var c in legion.artefacts) {
				artefactsarr.push(c)
			}
			formTable('artefacts')
		}	
		$(".wrap").click(function(){
			if($(this).hasClass("wrap_closed")){
				$(this).removeClass("wrap_closed")
			}
			else{
				$(this).addClass("wrap_closed")
			}
		})
	}
}

function getUnit(unitname){
	if(units[unitname]){
		return units[unitname]
	}
}

function fillSpell(lorename,unit){
	if(magic[lorename]){
		var lorespells = magic[lorename]
	}
	else{
		console.log("NO SUCH LORENAME FOUND: "+lorename)
	}
	var spellarr = []
	for (var c in lorespells) {spellarr.push(c)}
	var spellquantity = spellarr.length
	for (var s = 0; s < spellquantity; s++) {
		if(spellarr[s] == 'magicname'){
			var name = lorespells.magicname
			var tr = $('<tr />');
			var td1 = $('<td />',{colspan:'5',class:'header',text:name})
			$('#'+unit+'-spelltable').append(tr.append(td1))
		}
		else{
			var name = spellarr[s]
			var cast = lorespells[name].cast
			var range = lorespells[name].range
			var target = lorespells[name].target
			var effect = lorespells[name].effect
			var tr = $('<tr />');
			var td1 = $('<td />',{class:'spell-name',text:name})
			var td2 = $('<td />',{class:'spell-text'}).html(cast)
			var td3 = $('<td />',{class:'spell-text'}).html(range)
			var td4 = $('<td />',{class:'spell-text'}).html(target)
			var td5 = $('<td />',{class:'spell-text'}).html(effect)
			$('#'+unit+'-spelltable').append(tr.append(td1).append(td2).append(td3).append(td4).append(td5))				
		}
	}
}

function unitsMenu(){
	$('#page').html('')
	if(units){
		var unitsmenu = []
		for (var c in units) {
			unitsmenu.push(c)
		}
		var input = $('<input />',{type:'button',class:'warscrolls-btn',name:'showwarscrolls',value:'Show Warscrolls'})
		input.click(function(){
			unitsList()
		})
		$('#unitsmenu').html(input)
		var input = $('<input />',{type:'button',class:'cleartall-btn',name:'cleartall',value:'Clear All'})
		input.click(function(){
			unitsMenu()
		})
		input.css('margin-left','30px')
		$('#unitsmenu').append(input)
		for (var i =0; i < unitsmenu.length; i++) {
			if(unitsmenu[i] != 'basic'){
				var thisunit = getUnit(unitsmenu[i])
				var role = thisunit.role
				var name = thisunit.name
				var points = thisunit.points
				var par = $('<p />')
				var input = $('<input />',{type:'number',name:unitsmenu[i],value:0,min:0,class:'noprint floatleft unitnum'})
				input.change(function(){
					unitarr = []
					var printarr = $( "input[type=number].unitnum" )
					for (var i =0; i < printarr.length; i++) {
						var unitname = printarr[i].name
						var unitval = parseInt(printarr[i].value)
						if(unitname != 'basic' && unitval > 0){
							unitarr.push(unitname)
							$(printarr[i]).css('background-color','rgba(255,245,165,1)')
						}
						else{
							$(printarr[i]).css('background-color','white')
						}
					}
					unitPoints()
				})
				par.append(input)
				par.append(role+' | ')
				par.append(name)
				par.append('<span class="floatright">'+points+'</span>')
				par.css('font-size','12pt')
				$('#unitsmenu').append(par)
			}
		}
		$('#unitsmenu').append('<span id="unitpoints" class="noprint floatleft"></span>')
	}
}

function unitPoints(){
	var totalpoints = 0
	var totalunits = 0
	for (var i =0; i < unitarr.length; i++) {
		var thisunit = getUnit(unitarr[i])
		var points = thisunit.points
		var pointsunitnum = $( "input[name="+unitarr[i]+"].unitnum" ).val()
		Print(pointsunitnum)
		totalpoints += (parseInt(points)*parseInt(pointsunitnum))
		totalunits += parseInt(pointsunitnum)
	}
	$('#unitpoints').html('Total Points: ')
	$('#unitpoints').append(totalpoints)
	$('#rosterpoints').html(totalpoints)
	$('#rostertotalunits').html(totalunits)
}

function unitsList(){
	$('#page').html('')
	$('#rosterunits').html('')

	//// var unitarr = ['vampirelord','batswarms','fellbats','knightofshrouds','cairnwraith','tombbanshee','wightking1','wightking2','sepulcharguard','spirithosts','hexwraiths','mortisengine']
	// unitarr = ['tombbanshee','vampirelord','batswarms','fellbats','spirithosts']
	// unitarr = ['fellbats','vampirelord']
	for (var i =0; i < unitarr.length; i++) {
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
		// var totalthisunit = 0
		var pointsunitnum = $( "input[name="+unitarr[i]+"].unitnum" ).val()
		$('#rosterunits').append(name+' x '+pointsunitnum+'; ')

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
						if(getAbility(thisability)){thisabilitytext = getAbility(thisability)}
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

				//Add lore spells
				fillSpell('lorebasic',unitarr[i])
				// fillSpell('loreofdeathmages',unitarr[i])
				fillSpell('loreofvampires',unitarr[i])

				//Add unit spells
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
				table.attr('id',unitarr[i]+'-basicabiltable')

				for (var s = 0; s < abilquantity; s++) {
					var thisability = abilarr[s]
					var thisabilitytext = basicunit.command[thisability]
					var tr = $('<tr />');
					var td1 = $('<td />',{class:'abilityheader',text:thisability})
					var td2 = $('<td />',{class:'abilitytext'}).html(thisabilitytext)
					$('#'+unitarr[i]+'-command').append(table.append(tr.append(td1).append(td2)))
				}
			//Add Legion command ability
			if(legions[army].commandability){
				var precomabil = $('#'+unitarr[i]+'-basicabiltable .abilityheader').html()
				var arr = []
				for (var c in legions[army].commandability) {
					arr.push(c)
				}
				arr.push(thisability)
				var thisability = arr[0]
				if(precomabil != thisability){
					var thisabilitytext = getAbility(arr[0])
					var table = $('<table />')
					table.attr('cellpadding',"0px")
					table.attr('cellspacing','0px')
					table.attr('width','100%')
					table.attr('class','abiltable')
					table.attr('id',unitarr[i]+'-legionabiltable')
					var tr = $('<tr />');
					var td1 = $('<td />',{class:'abilityheader',text:thisability})
					var td2 = $('<td />',{class:'abilitytext'}).html(thisabilitytext)
					$('#'+unitarr[i]+'-command').append(table.append(tr.append(td1).append(td2)))
				}
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

		//KEYWORDS
			$('#'+unitarr[i]).append($('<div />',{class:'header',text:'KEYWORDS'}))
			$('#'+unitarr[i]).append($('<div />',{class:'keywords',text:keywords}))
	}
}
legionsList(legions)
unitsMenu()
getLegion(army)