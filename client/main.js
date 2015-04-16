Template.home.helpers({
  builds: function(){
    
    return Collections.Builds.find({},{sort:[["kills","desc"]]}).map(function(build, index) {
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
    
  }
  
  
  
});