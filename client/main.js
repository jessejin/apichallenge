Template.home.helpers({
  builds: function(){
    
    return Collections.Builds.find({},{sort:[["stats.kills","desc"]]}).map(function(build, index) {
                                                                          build.rank = index + 1;
                                                                          return build;
                                                                        });
  }
});





Template.build.helpers({
  championImgName: function(championId){
    return Collections.ChampionsArray[championId].image.full;
  }, 
  masteryCode: function(masteries){
      
      var returnCodes = '000000000000000000000000000000000000000000000000000000000'.split('');
      
      for (var i = 0; i < masteries.length; i++) {
          var index = Collections.MasteryArray.indexOf(masteries[i].masteryId);
          returnCodes[index] = masteries[i].rank.toString();
      }
      return returnCodes.join("");
  },
  spellImgName: function(spellId){
    
    return Collections.SummonersArray[spellId].image.full;
    
  }, 
  runeImgName: function(runeId){
    
    return Collections.RuneArray[runeId].image.full;
    
  }, 
  runeName: function(runeId){
    
    return Collections.RuneArray[runeId].name;
    
  },
  runeDesc: function(runeId){
    
    return Collections.RuneArray[runeId].description;
    
  },
  runeTitle: function(runeId){
    
    return Collections.RuneArray[runeId].name + "\n\n" + Collections.RuneArray[runeId].description;
    
  },
  itemTitle: function(itemId){
    
    return Collections.ItemArray[itemId].name + "\n\n" + Collections.ItemArray[itemId].plaintext;
    
  },
  itemTooltipName: function(itemId){
    if(Collections.ItemArray[itemId] !=undefined)
      return Collections.ItemArray[itemId].name.replace(/\s+/g, '-').toLowerCase();;
    return null;
  },
  spells: function(){
    
    var spells = Collections.ChampionsArray[this.championId].spells.slice(0);
    spells[0].Q = "Q";
    spells[1].Q = "W";
    spells[2].Q = "E";
    spells[3].Q = "R";
    for (var i = 0; i < spells.length; i++) {
      spells[i].showSkillSlots = [];
      for(var j=0; j<this.skillSlots.length; j++){
        console.dir(this.skillSlots[j].itemId);
        spells[i].showSkillSlots[j] = {};
        spells[i].showSkillSlots[j].show = (this.skillSlots[j].itemId == (i+1));
        spells[i].showSkillSlots[j].number = j+1;
      }
    }
    
    return spells;
  }
});

Template.home.rendered = function(){
  LoLTip.add();
}