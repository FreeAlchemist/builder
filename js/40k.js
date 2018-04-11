//Get selected option value
var army
pointsystem = $("select[name='pointsystem'] > option:checked").val()
console.log('pointsystem '+pointsystem)
$("#armyselect").change(function(){
		army = $("select[name='armyselect'] > option:checked").val()
		detachmentsList ()
		getPoints()
		detToggle2()
})

$("#pointsystem").change(function(){
		pointsystem = $("select[name='pointsystem'] > option:checked").val()
		detachmentsList ()
		getPoints()
		detToggle2()
})

var rosterformed = 0

//Toggle between detachments and roster
function detToggle(){
	if(rosterformed == 0){
		$("#detachments").toggle()
		$("#page").toggle()
		getRoster(army)
		rosterformed = 1
		$('#roster-btn').attr("value","Detachments")
	}
	else{
		$("#detachments").toggle()
		$("#page").toggle()
		rosterformed = 0
		$('#roster-btn').attr("value","Roster")
	}
}

//Go to detachments list
function detToggle2(){
	var mode = $('#roster-btn').attr("value")
	if(mode == "Detachments"){
		$("#detachments").toggle()
		$("#page").toggle()
		rosterformed = 0
		$('#roster-btn').attr("value","Roster")
	}
}

function printToggle(){
	// console.log('---------------------------------------------------- PRINT TOGGLE')
	var noprintarr = $( "input[type=checkbox]" )
		for (var i =0; i < noprintarr.length; i++) {
		var noprintname = noprintarr[i].value
		if(!$("#"+noprintname).hasClass( "noprint" )){
			// console.log("#"+noprintname+' has class noprint! Removed and added')
			$("#"+noprintname).addClass("noprint")
		}
	}
	var printarr = $( "input[type=checkbox]:checked" )
	for (var i =0; i < printarr.length; i++) {
		var printname = printarr[i].value
		// console.log(printname)
		// console.log($("#"+printname))
		if($("#"+printname).hasClass( "noprint" )){
			// console.log("#"+printname+' has class noprint!')
			$("#"+printname).removeClass("noprint")
		}
	}
}

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

//Get pont for all selected units
function getPoints(){
	//all selected units
	allrosterarr = []
	//all selected units by detachment
	detrosterarr = []
	// console.log("Changed option")
	// console.log(selectarr)
	// console.log(selectarr.length)
	detpoints = 0
	unitcount = 0
	for (var i =0; i < selectarr.length; i++) {
		var detachselectpoints = 0
		// $("#"+detachmentsarr[i]+"-points").html(detachselectpoints+' pts')
		var detachselect = selectarr[i]
		var detroster = []
		// console.log(detachselect)
		// console.log(detachselect.length)
		var previousunit
		for (var j =0; j < detachselect.length; j++) {
			var selectedunit = $("select[name='"+detachselect[j]+"'] > option:checked").val()
			if(selectedunit){
				allrosterarr.push(selectedunit)
				detroster.push(selectedunit)
				// console.log(selectarr[i])
				// console.log('SELECTED UNIT '+selectedunit)
				// console.log(library[army].units[selectedunit].points)
				// console.log(detachmentsarr[i])
				if(pointsystem == 'powerpoints'){
					var unitpoints = library[army].units[selectedunit].powerpoints
				}
				if(pointsystem == 'points'){
					var unitpoints = library[army].units[selectedunit].points
				}
				console.log('unitpoints '+unitpoints)
				unitcount+=1
				detpoints+=parseInt(unitpoints)
				detachselectpoints+=parseInt(unitpoints)
			}
			$("#"+detachmentsarr[i]+"-points").html(detachselectpoints+' pts')

		}
		detrosterarr.push(detroster)
	}
	// army = $("select[name='armyselect'] > option:checked").val()
	// console.log(unitcount+' units')
	// console.log(detpoints+' pts')
	$("#totalpoints").html(detpoints+' pts')

	//unique selected units
	rosterarr = []
	$.each(allrosterarr,function(i, el){
		if($.inArray(el, rosterarr) === -1) rosterarr.push(el);
	})


	console.log("allrosterarr: all selected units")
	console.log(allrosterarr)
	console.log(allrosterarr.length)
	console.log("detrosterarr: all selected units by detachment")
	console.log(detrosterarr)
	console.log(detrosterarr.length)
	console.log("rosterarr: unique selected units")
	console.log(rosterarr)
	console.log(rosterarr.length)
}

function detachmentsList () {
	selectarr = []
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

	for (var i =0; i < unitarr.length; i++) {
		var thisunit = library[army].units[unitarr[i]]
		var role = thisunit.role
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
					var td = $('<td />',{class:rolesarr[n]+' aux',text:minrole+'-'+maxrole}).append('<br>')
					for (var m =1; m <= maxrole; m++) {
						var select = $('<select />',{id:detachmentsarr[i]+'-'+rolesarr[n]+'-'+m,name:detachmentsarr[i]+'-'+rolesarr[n]+'-'+m})
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
				else{
					var td = $('<td />',{class:rolesarr[n]+' required',text:minrole+'-'+maxrole}).append('<br>')
					for (var m =1; m <= minrole; m++) {
						var select = $('<select />',{id:detachmentsarr[i]+'-'+rolesarr[n]+'-'+m,name:detachmentsarr[i]+'-'+rolesarr[n]+'-'+m,class:'required-select'})
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
							var option = $('<option />')
							option.attr('selected','selected')
							select.prepend(option)
						}
						td.append(select)
					}
					for (var m = minrole+1; m <= maxrole; m++) {
						var select = $('<select />',{id:detachmentsarr[i]+'-'+rolesarr[n]+'-'+m,name:detachmentsarr[i]+'-'+rolesarr[n]+'-'+m})
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
	}
}

//Form datasheets for all selected units
function getRoster(army){
	if(army){
		console.log(rosterarr.length)
		
		var table = $('<table />')
		table.attr('cellpadding',"0px")
		table.attr('cellspacing','0px')
		table.attr('width','100%')
		table.attr('class','topborder')
		table.attr('id','rostertable')
		$('#page').html(table)

		var tr = $('<tr />');
		if(pointsystem == 'powerpoints'){
			var td1 = $('<td />',{class:'weapon-stats-header',text:'Total Power Points'})
		}
		if(pointsystem == 'points'){
			var td1 = $('<td />',{class:'weapon-stats-header',text:'Total Matched Points'})
		}
		var td2 = $('<td />',{class:'weapon-stats-header',text:'Total CP'})
		var td3 = $('<td />',{class:'weapon-stats-header',text:'Total Units'})
		var td4 = $('<td />',{class:'weapon-stats-header',text:'Army'})

		var rosterinfo = tr.append(td1).append(td2).append(td3).append(td4)
		$('#rostertable').append(rosterinfo)

		var tr = $('<tr />');
		var td1 = $('<td />',{class:'weapon-stats-text',text:detpoints,id:'roster-totalpoints'})
		var td2 = $('<td />',{class:'weapon-stats-text',text:'',id:'roster-totalcp'})
		var td3 = $('<td />',{class:'weapon-stats-text',text:unitcount,id:'roster-totalunits'})
		var td4 = $('<td />',{class:'weapon-stats-text',text:library[army].armyname,id:'roster-army'})

		var rosterinfo = tr.append(td1).append(td2).append(td3).append(td4)
		$('#rostertable').append(rosterinfo)

		var tr = $('<tr />');
		var td1 = $('<td />',{class:'weapon-stats-header',text:'Points'})
		var td2 = $('<td />',{class:'weapon-stats-header',text:'CP'})
		var td3 = $('<td />',{class:'weapon-stats-header',text:'DETACHMENT"'})
		var td4 = $('<td />',{class:'weapon-stats-header',text:'Units'})
		
		var rosterinfo = tr.append(td1).append(td2).append(td3).append(td4)
		$('#rostertable').append(rosterinfo)

		var TotalCP = 3
		for (var i =0; i < detachmentsarr.length; i++) {
			var Detpts = parseInt($("#"+detachmentsarr[i]+"-points").html())
			var DetCP = detachments[detachmentsarr[i]].cp
			var tr = $('<tr />',{id:detachmentsarr[i]+'-roster',class:'hide'});
			if(Detpts > 0){
				TotalCP += parseInt(DetCP)
				var tr = $('<tr />',{id:detachmentsarr[i]+'-roster'});
			}
			var td1 = $('<td />',{class:'weapon-stats-text',text:Detpts})
			var td2 = $('<td />',{class:'weapon-stats-text',text:DetCP})
			var td3 = $('<td />',{class:'weapon-stats-text',text:detachments[detachmentsarr[i]].name})
			var td4 = $('<td />',{class:'weapon-stats-text',id:detachmentsarr[i]+'-roster-units'})
			var rosterinfo = tr.append(td1).append(td2).append(td3).append(td4)
			$('#rostertable').append(rosterinfo)
		}
		$('#roster-totalcp').html(TotalCP)
		for (var i =0; i < detrosterarr.length; i++) {
			var unitlist = ''
			if(detrosterarr[i].length != 0){
				for (var j =0; j < detrosterarr[i].length; j++) {
					unitlist += library[army].units[detrosterarr[i][j]].name+'; '
				}
			}
			console.log('unitlist')
			console.log(unitlist)
			$('#'+detachmentsarr[i]+'-roster-units').html(unitlist)
		}

	//Traits
		if(library[army].traits){
			var table = $('<table />')
			table.attr('cellpadding',"0px")
			table.attr('cellspacing','0px')
			table.attr('width','100%')
			table.attr('class','topborder noprint')
			table.attr('id','traitstable')
			$('#page').append(table)
			var traitsarr = []
			for (var c in library[army].traits) {
				traitsarr.push(c)
			}
			var traitsquantity = traitsarr.length
			var tr = $('<tr />')
			var input = $('<input />',{type:'checkbox',name:'traitstable',value:'traitstable',class:'noprint'})
			var td1 = $('<td />',{class:'army-header',text:'Traits'})
			var td2 = $('<td />',{class:'army-header'}).html('<span class="noprint">Print</span>').append(input)
							input.change(function(){
					printToggle()
				})
			var traitsinfo = tr.append(td1).append(td2)
			$('#traitstable').append(traitsinfo)
			for (var s = 0; s < traitsquantity; s++) {
				var thistrait = traitsarr[s]
				var thistraittext = library[army].traits[thistrait]
				var tr = $('<tr />',{class:'noprint',id:'trait-'+(s+1)})
				var input = $('<input />',{type:'checkbox',name:'traitstable',value:'trait-'+(s+1),class:'noprint'})
				var td1 = $('<td />',{class:'abilityheader'}).html(thistrait).prepend(input)
				var td2 = $('<td />',{class:'abilitytext'}).html(thistraittext)
				var traitsinfo = tr.append(td1).append(td2)
				$('#traitstable').append(traitsinfo)
				input.change(function(){
					printToggle()
				})
			}
		}

	//Relics
		if(library[army].relics){
			var table = $('<table />')
			table.attr('cellpadding',"0px")
			table.attr('cellspacing','0px')
			table.attr('width','100%')
			table.attr('class','topborder noprint')
			table.attr('id','relicstable')
			$('#page').append(table)
			var relicsarr = []
			for (var c in library[army].relics) {
				relicsarr.push(c)
			}
			var relicsquantity = relicsarr.length
			var tr = $('<tr />')
			var input = $('<input />',{type:'checkbox',name:'relicstable',value:'relicstable',class:'noprint'})
			var td1 = $('<td />',{class:'army-header',text:'Relics'})
			var td2 = $('<td />',{class:'army-header'}).html('<span class="noprint">Print</span>').append(input)
			input.change(function(){
					printToggle()
				})
			var relicsinfo = tr.append(td1).append(td2)
			$('#relicstable').append(relicsinfo)
			for (var s = 0; s < relicsquantity; s++) {
				var thisrelic = relicsarr[s]
				var thisrelictext = library[army].relics[thisrelic]
				var tr = $('<tr />',{class:'noprint',id:'relic-'+(s+1)})
				var input = $('<input />',{type:'checkbox',name:'relicstable',value:'relic-'+(s+1),class:'noprint'})
				var td1 = $('<td />',{class:'abilityheader'}).html(thisrelic).prepend(input)
				var td2 = $('<td />',{class:'abilitytext'}).html(thisrelictext)
				var relicsinfo = tr.append(td1).append(td2)
				$('#relicstable').append(relicsinfo)
				input.change(function(){
					printToggle()
				})
			}
		}

	//WARSCROLLS
		for (var i =0; i < rosterarr.length; i++) {
			console.log(i)
			console.log(rosterarr[i])
			var unit = rosterarr[i]
			var thisunit = library[army].units[unit]
			console.log(thisunit)
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

			if(pointsystem == 'powerpoints'){
				if(thisunit.role){rolename = name+' ('+role+')'+' ('+powerpoints+' pp )'}
					else{rolename = name}
			}
			if(pointsystem == 'points'){
				if(thisunit.role){rolename = name+' ('+role+')'+' ('+points+' pts)'}
					else{rolename = name}
			}

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
						if(library[army].weapons[name]){
							var tr = $('<tr />');
							var td1 = $('<td />',{class:'weapon-name',text:name})
							if(library[army].weapons[name].range){
								var weaponrange = library[army].weapons[name].range
								var td2 = $('<td />',{class:'weapon-stats-text smallstat',text:weaponrange})
							}
							else{
								var weaponrange = '???'
								var td2 = $('<td />',{class:'weapon-stats-text smallstat alert',text:weaponrange})
							}
							if(library[army].weapons[name].type){
								var weapontype = library[army].weapons[name].type
								var td3 = $('<td />',{class:'weapon-stats-text',text:weapontype})
							}
							else{
								var weapontype = '???'
								var td3 = $('<td />',{class:'weapon-stats-text alert',text:weapontype})
						}
							if(library[army].weapons[name].strength){
								var weaponstrength = library[army].weapons[name].strength
								var td4 = $('<td />',{class:'weapon-stats-text smallstat',text:weaponstrength})
							}
							else{
								var weaponstrength = '???'
								var td4 = $('<td />',{class:'weapon-stats-text smallstat alert',text:weaponstrength})
						}
							if(library[army].weapons[name].ap){
								var weaponap = library[army].weapons[name].ap
								var td5 = $('<td />',{class:'weapon-stats-text smallstat',text:weaponap})
							}
							else{
								var weaponap = '???'
								var td5 = $('<td />',{class:'weapon-stats-text smallstat alert',text:weaponap})
						}
							if(library[army].weapons[name].damage){
								var weapondamage = library[army].weapons[name].damage
								var td6 = $('<td />',{class:'weapon-stats-text smallstat',text:weapondamage})
							}
							else{
								var weapondamage = '???'
								var td6 = $('<td />',{class:'weapon-stats-text smallstat alert',text:weapondamage})
						}
							if(library[army].weapons[name].ability){
								var weaponability = library[army].weapons[name].ability
								var td7 = $('<td />',{class:'weapon-stats-text weapon-stats-ability'}).html(weaponability)
							}
							else{
								var weaponability = '???'
								var td7 = $('<td />',{class:'weapon-stats-text weapon-stats-ability alert'}).html(weaponability)
						}
							if(library[army].weapons[name].points){
								var weaponpoints = library[army].weapons[name].points
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
}

armyList(library)
detachmentsList ()
getPoints()