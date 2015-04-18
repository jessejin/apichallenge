Riot API Challenge - Ultra Rapid Fire - Most Wanted Builds
==================

Built On
* Riot API
* League Craft Masteries Builder
* LoL Tooltip Library
* Meteor
* MongoDB
* Modified LeagueJS [https://github.com/jessejin/LeagueJS]

Demo Site: [http://jessejin.cloudapp.net/]

Dev Details
* Downloaded All Ultra Rapid Fire matches to local MongoDB
    * downloadMatches.js uesd to download all matches
* Sorted Player Kills and selected top 10 Players
    * query.js used to query downloaded data to create data for display
* Use Meteor to display play builds with runes, masteries, skills order and item purchases order.
    * Bootstrap slate theme [https://bootswatch.com/slate/]
    * League Craft Masteries Builder [http://leaguecraft.com/masteries/]
    * LoLBuilder Tooltip Library [http://tooltip.lolbuilder.net/]