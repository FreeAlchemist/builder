//Get selected option value
var army
$("#armyselect").change(function(){
		army = $("select[name='armyselect'] > option:checked").val()
		// console.log(army)
		detachmentsList ()
		getPoints()
		// unitsList ()
	// 	// getRoster(army)
	// getUnit(faction, unitname)
})


//Add all army select options to menu
function armyList(library){
	var arr = []
	// selectarr = []
	for (p in library){
		arr.push(p)
	}
	// console.log(arr)
	for(var i = 0; i < arr.length; i++){
		if(library[arr[i]]){
			var option = $('<option />')
			option.attr('value',arr[i])
			if(i == 0){
				option.attr('selected','selected')
				army = arr[i]
				// console.log(army)
			}
			option.attr('label',library[arr[i]].armyname)
				$('#armyselect').append(option)
		}
	}
}

//Get selected unit info
function getUnit(faction, unitname){
	return faction[unitname]
	console.log(faction[unitname])
	//return library.[army].units[unitname]
}

//Form datasheets for all selected units
function getRoster(army){
	if(army){
		console.log(rosterarr.length)

		$('body').prepend($('<div />',{id:'page'}))
		var totalpoints = 0
		for (var i =0; i < rosterarr.length; i++) {
			console.log(i)
			console.log(rosterarr[i])
			var thisunit = getUnit(faction,rosterarr[i])
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

			$('#page').append($('<div />',{class:'warscroll',id:rosterarr[i]}))
			//CHARACTERISTICS
				$('#'+rosterarr[i]).append($('<div />',{class:'chars',id:rosterarr[i]+'-chars'}))
				if(thisunit.degradate){
					$('#'+rosterarr[i]+'-chars').append($('<div />',{class:'name',text:rolename}).append($('<div />',{class:'level',id:rosterarr[i]+'-level'})))
					var degradatearr = thisunit.degradate
					var degradatequantity = degradatearr.length
					for (var s = 0; s < degradatequantity; s++) {
						$('#'+rosterarr[i]+'-level').append($('<div />',{class:'woundlevel',id:rosterarr[i]+'-level-'+s}))
						var level = parseInt(degradatearr[s])
						for (var l = 0; l < level; l++) {
							$('#'+rosterarr[i]+'-level-'+s).append($('<div />',{class:'wound'}))
						};
						$('#'+rosterarr[i]+'-level-'+s).append($('<div />',{class:'woundfiller'}))
					}
				}
				else{
					$('#'+rosterarr[i]+'-chars').append($('<div />',{class:'name',text:rolename}))
				}

				var table = $('<table />')
				table.attr('cellpadding',"0px")
				table.attr('cellspacing','0px')
				table.attr('width','100%')
				table.attr('class','topborder')
				table.attr('id',rosterarr[i]+'-statstable')
				$('#'+rosterarr[i]+'-chars').append(table)
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
				$('#'+rosterarr[i]+'-statstable').append(statsinfo)
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
				$('#'+rosterarr[i]+'-statstable').append(statsinfo)

			//WEAPON
				if(thisunit.weapon){
					$('#'+rosterarr[i]).append($('<div />',{class:'weapon',id:rosterarr[i]+'-weapon'}))
					var table = $('<table />')
					table.attr('cellpadding',"0px")
					table.attr('cellspacing','0px')
					table.attr('width','100%')
					table.attr('class','topborder')
					table.attr('id',rosterarr[i]+'-weapontable')
					$('#'+rosterarr[i]+'-weapon').append(table)
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
					
					$('#'+rosterarr[i]+'-weapontable').append(weaponinfo)
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
						$('#'+rosterarr[i]+'-weapontable').append(weaponinfo)
					}
				}

			//ABILITIES
				if(thisunit.abilities){
					$('#'+rosterarr[i]).append($('<div />',{class:'abilities',id:rosterarr[i]+'-abilities'}))
					$('#'+rosterarr[i]+'-abilities').append($('<div />',{class:'header',text:'ABILITIES'}))
					var abilarr = []
					for (var c in thisunit.abilities) {
						abilarr.push(c)
					}
					var abilquantity = abilarr.length
					var table = $('<table />')
					table.attr('cellpadding',"0px")
					table.attr('cellspacing','0px')
					table.attr('width','100%')
					table.attr('id',rosterarr[i]+'-abiltable')
					for (var s = 0; s < abilquantity; s++) {
						var thisability = abilarr[s]
						var thisabilitytext = thisunit.abilities[thisability]
						var tr = $('<tr />');
						var td1 = $('<td />',{class:'abilityheader'}).html(thisability)
						var td2 = $('<td />',{class:'abilitytext'}).html(thisabilitytext)
						$('#'+rosterarr[i]+'-abilities').append(table.append(tr.append(td1).append(td2)))
					}
				}

			//KEYWORDS
				$('#'+rosterarr[i]).append($('<div />',{class:'abilities',id:rosterarr[i]+'-keywords'}))
				var table = $('<table />')
				table.attr('cellpadding',"0px")
				table.attr('cellspacing','0px')
				table.attr('width','100%')
				table.attr('class','topborder')
				table.attr('id',rosterarr[i]+'-keywordstable')
				var tr = $('<tr />');
				var td1 = $('<td />',{class:'abilityheader table-header',text:'FACTION KEYWORDS'})
				var td2 = $('<td />',{class:'abilitytext'}).html(factionkeywords)
				$('#'+rosterarr[i]+'-keywords').append(table.append(tr.append(td1).append(td2)))
				var tr = $('<tr />');
				var td1 = $('<td />',{class:'abilityheader table-header',text:'KEYWORDS'})
				var td2 = $('<td />',{class:'abilitytext'}).html(keywords)
				$('#'+rosterarr[i]+'-keywords').append(table.append(tr.append(td1).append(td2)))
		}	
	}
// $('#page').append('total points: '+totalpoints)
}



function getPoints(){
	rosterarr = []
	// console.log("Changed option")
	// console.log(selectarr)
	// console.log(selectarr.length)
	var detpoints = 0
	var unitcount = 0
	for (var i =0; i < selectarr.length; i++) {
		var detachselectpoints = 0
		// $("#"+detachmentsarr[i]+"-points").html(detachselectpoints+' pts')
		var detachselect = selectarr[i]
		// console.log(detachselect)
		// console.log(detachselect.length)
		var previousunit
		for (var j =0; j < detachselect.length; j++) {
			var selectedunit = $("select[name='"+detachselect[j]+"'] > option:checked").val()
			if(selectedunit){
				rosterarr.push(selectedunit)
					// for (var m = 0; m < rosterarr.length; m++) {
					// 	var unit1 = rosterarr[m]			
					// 		if(selectedunit != unit1){
					// 			rosterarr.push(selectedunit)
					// 		}
					// 	}

				// console.log(selectarr[i])
				// console.log('SELECTED UNIT '+selectedunit)
				// console.log(library[army].units[selectedunit].points)
				// console.log(detachmentsarr[i])
				var unitpoints = library[army].units[selectedunit].points
				unitcount+=1
				detpoints+=parseInt(unitpoints)
				detachselectpoints+=parseInt(unitpoints)
				
			}
			$("#"+detachmentsarr[i]+"-points").html(detachselectpoints+' pts')
		}
	}
	// army = $("select[name='armyselect'] > option:checked").val()
	// console.log(unitcount+' units')
	// console.log(detpoints+' pts')
	$("#totalpoints").html(detpoints+' pts')
	console.log("rosterarr")
	console.log(rosterarr)
	console.log(rosterarr.length)
	// var unique = 1
	var unit = rosterarr[0]
	// var unit2
	// var rosterarr2 = []

		for (var m = rosterarr.length; m >0; m--) {
			var unit2 = rosterarr[m]
				if(unit2 == unit){
					rosterarr.pop()
				}
				
			}

	console.log("rosterarr")
	console.log(rosterarr)
	console.log(rosterarr.length)
	// console.log("rosterarr2")
	// console.log(rosterarr2)
	// console.log(rosterarr2.length)
}





function detachmentsList () {
	selectarr = []
	// console.log(library[army])
	// console.log(library[army].units)

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
	// console.log(unitarr)
	// console.log(library[army].units[unitarr[3]])
	// console.log(library[army].units[unitarr[3]].role)

	for (var i =0; i < unitarr.length; i++) {
		// console.log(i)
		var thisunit = library[army].units[unitarr[i]]
		// console.log('thisunit:'+thisunit.name)
		// console.log(thisunit)
		var role = thisunit.role
		// console.log('role: '+role)
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

	detachmentsarr = []
	for(p in detachments){
		detachmentsarr.push(p)
	}
	// console.log(detachmentsarr)
	var rolesarr = ['hq','troops','elites','fast','heavy','flyers','dedicated','low','fortification']
	var detarr = [hqarr,troopsarr,elitesarr,fastarr,heavyarr,flyersarr,dedicatedarr,lowarr,fortificationarr]
	var tr = $('<tr />');
	var td1 = $('<td />',{class:'detachment',text:'DETACHMENT'})
	var td2 = $('<td />',{class:'cp',text:'CP'})
	var td3 = $('<td />',{class:'hq',text:'HQ'})
	var td4 = $('<td />',{class:'troops',text:'Troops'})
	var td5 = $('<td />',{class:'elites',text:'Elites'})
	var td6 = $('<td />',{class:'fast',text:'Fast'})
	var td7 = $('<td />',{class:'heavy',text:'Heavy'})
	var td8 = $('<td />',{class:'flyers',text:'Flyers'})
	var td9 = $('<td />',{class:'dedicated',text:'Dedicated transport'})
	var td10 = $('<td />',{class:'low',text:'Lord of war'})
	var td11 = $('<td />',{class:'fortification',text:'Fortification'})
	var td12 = $('<td />',{class:'detpoints',text:'DetPts',id:'totalpoints'})

	var detachmentsinfo = tr.append(td1).append(td2).append(td3).append(td4).append(td5).append(td6).append(td7).append(td8).append(td9).append(td10).append(td11).append(td12)
	$("#detachment").html(detachmentsinfo)

	for (var i =0; i < detachmentsarr.length; i++) {
		var thisdetachment = detachments[detachmentsarr[i]]
		var detselect = []
		// console.log(detselect)
		// console.log(thisdetachment)
		// console.log(thisdetachment.name)
		var tr = $('<tr />',{id:detachmentsarr[i]})
		var td1 = $('<td />',{class:'detachment',text:thisdetachment.name})
		var td2 = $('<td />',{class:'cp',text:thisdetachment.cp})
		var detachmentsinfo = tr.append(td1).append(td2)
		$("#detachment").append(detachmentsinfo)

		for (var n =0; n < rolesarr.length; n++) {
			var minmax = thisdetachment[rolesarr[n]]
			var minrole = minmax[0]
			var maxrole = minmax[1]
			var diff = maxrole - minrole
			if(minrole == 0 && maxrole == 0){
				var td = $('<td />',{class:rolesarr[n]+' passive'})
			}
			else{
				if(minrole == 0){
					var td = $('<td />',{class:rolesarr[n]+' aux',text:thisdetachment[rolesarr[n]]}).append('<br>')
					for (var m =1; m <= maxrole; m++) {
						var select = $('<select />',{id:detachmentsarr[i]+'-'+rolesarr[n]+'-'+m,name:detachmentsarr[i]+'-'+rolesarr[n]+'-'+m})
						// selectarr.push(detachmentsarr[i]+'-'+rolesarr[n]+'-'+m)
						detselect.push(detachmentsarr[i]+'-'+rolesarr[n]+'-'+m)
						select.change(function(){
							getPoints()
						})
						var thisdetarr = detarr[n]
						if(thisdetarr.length > 0){
							// console.log('Big length')
							for(var o = 0; o < thisdetarr.length; o++){
									var option = $('<option />')
									option.attr('value',thisdetarr[o])
									option.attr('label',library[army].units[thisdetarr[o]].name)
									select.append(option)
							}
							var option = $('<option />')
							option.attr('selected','selected')
							select.prepend(option)
						}
						td.append(select)
					}
				}
				else{
					var td = $('<td />',{class:rolesarr[n]+' required',text:thisdetachment[rolesarr[n]]}).append('<br>')
					for (var m =1; m <= minrole; m++) {
						var select = $('<select />',{id:detachmentsarr[i]+'-'+rolesarr[n]+'-'+m,name:detachmentsarr[i]+'-'+rolesarr[n]+'-'+m})
						// selectarr.push(detachmentsarr[i]+'-'+rolesarr[n]+'-'+m)
						detselect.push(detachmentsarr[i]+'-'+rolesarr[n]+'-'+m)
						select.change(function(){
							getPoints()
						})
						var thisdetarr = detarr[n]
						if(thisdetarr.length > 0){
							for(var o = 0; o < thisdetarr.length; o++){
									var option = $('<option />')
									option.attr('value',thisdetarr[o])
									if(o == 0){
										option.attr('selected','selected')
									}
									option.attr('label',library[army].units[thisdetarr[o]].name)
									select.append(option)
							}
						}
						td.append(select)
					}
					for (var m = minrole+1; m <= maxrole; m++) {
						var select = $('<select />',{id:detachmentsarr[i]+'-'+rolesarr[n]+'-'+m,name:detachmentsarr[i]+'-'+rolesarr[n]+'-'+m})
						// selectarr.push(detachmentsarr[i]+'-'+rolesarr[n]+'-'+m)
						detselect.push(detachmentsarr[i]+'-'+rolesarr[n]+'-'+m)
						select.change(function(){
							getPoints()
						})
						var thisdetarr = detarr[n]
						if(thisdetarr.length > 0){
							for(var o = 0; o < thisdetarr.length; o++){
									var option = $('<option />')
									option.attr('value',thisdetarr[o])
									option.attr('label',library[army].units[thisdetarr[o]].name)
									select.append(option)
							}
							var option = $('<option />')
							option.attr('selected','selected')
							select.prepend(option)
						}
						td.append(select)
					}
				}
			}
			$("#"+detachmentsarr[i]).append(td)
		}
		var td = $('<td />',{id:detachmentsarr[i]+'-points',class:'detpoints',text:'DetPts'})
		$("#"+detachmentsarr[i]).append(td)
	selectarr.push(detselect)	
	// console.log(detselect)
}

}

armyList(library)
// unitsList ()
detachmentsList ()
// console.log(selectarr)
getPoints()
//$( "input[name^='news']" ).val( "news here!" );