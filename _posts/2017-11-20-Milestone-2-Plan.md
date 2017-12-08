---
title: Milestone 1 and 2 plan.
date: 2017-11-20 12:14:10 -0000
categories: Milestone1 Milestone2 Plan
---

# Behind Trump's Tweets

This was our original plan. The part added for milestone 2 is at the end.

## Abstract

The core idea is to throughly explore rhetoric (e.g. word usage) in the Trump Twitter Archive dataset. We would like to explore the change over time and how certain events affects it. From this, as the end goal, we would like to do some social good by establishing good (trustworthy) and bad (not trustworthy) patterns in Trump's tweets.

More specifically, we want to analyze the change before and after he announced his presidential candidacy and before and after his election. In addition these long-period analytics, we would also like to explore the change in rhetoric incurred by related political scandals or major international events. Lastly, we would also compare Trump's rhetoric with Clinton's and Obama's.

The main motivation beind this project is a fascination with how such a condensed messaging format influences so many people. We were curious to see if we could take advandage of the brief format and find patterns and/or classify a tweet as 'good' or 'bad'.


## Research questions

We would like to answer/explore the following:  

* Word usage type of tweet in three periods:
    * Before presidential candidacy announcement, first tweet to 16/06/2015.  
    * Before election, 16/06/2015 to 8/11/2016.  
    * After election, 8/11/2016 to now.  

* Are there any change in word usage and/or rhetoric in connected to poll results?

* Are there any change in word usage and/or rhetoric in connected to events and scandals?
  E.g. Panama Papers, Clinton e-mails, Political victories, North Korea tensions, and so on.

* Differences and similarities in word usage and rhetoric compared to other politicians, e.g. Clinton, Obama, or republican nominee opponents.

* Analyse his retweets and replies.  
  E.g. while he mostly retweet right-wing content (true?), does he reply to users from both sides of the political spectum?  
  How does the word usage in his replies differ from his normal tweets?

* When did the phrase "Fake News" arise? Explore usage frequency connection to scandals.

* What are the patterns he uses when he tweets something agressive, defensive, or to discredit someone? What is the frequency of these patterns?


## Datasets

#### Main Dataset  
*[Trump Twitter Archive](https://github.com/bpb27/trump_tweet_data_archive)*  
Size ~2GB. Updated hourly. We will probably use the condensed version of the tweet data. But we will also at least take a look at the full version and see if we can extract some extra information from it.

Example from condensed dataset (formatted with [SublimePrettyJson](https://github.com/dzhibas/SublimePrettyJson)).


```JSON
  {
    "source": "Twitter for iPhone",
    "id_str": "920425069964349445",
    "text": "BORDER WALL prototypes underway! https://t.co/arFNO80zmO",
    "created_at": "Tue Oct 17 23:03:32 +0000 2017",
    "retweet_count": 31067,
    "in_reply_to_user_id_str": null,
    "favorite_count": 104601,
    "is_retweet": false
  },
```

#### Supporting Datasets
This list is not final and might grow or shrink as the project progresses.  

* [Obama Tweets](https://www.kaggle.com/speckledpingu/rawtwitterfeeds), size < 20MB.
* [Clinton Tweets](https://www.kaggle.com/speckledpingu/rawtwitterfeeds), size < 20MB.
* List of major events, [example](https://en.wikipedia.org/wiki/2016).
* List of Trump-related scandals/controvercies, [example](https://en.wikipedia.org/wiki/Category:Donald_Trump_controversies). 


## A list of internal milestones up until project milestone 2

Week by week. Deadline is 28/11 - 2017, i.e. Tuesday week 48.


<table style="width:80%">
  <tr>
    <th>Week 44</th>
    <th>Week 45</th> 
    <th>Week 46</th>
    <th>Week 47</th>
  </tr>
  <tr>
    <td valign="top">
    	Explore dataset<br><br>
    	'General' plots for different periods.
    </td>
    <td valign="top">
    	Difference comparison to Obama, Clinton.<br><br>
    	'Fake news' analysis
    </td>
    <td valign="top">Analysis of event, poll results, approval ratings, and scandal impact.<br><br>
    	Reply and retweet analysis start.
    </td>
    <td valign="top">Pattern and good/bad tweet analysis.<br><br>
    	Reply and retweet analysis completed.<br><br>
    	Update README
    </td>
  </tr>
</table>


## Questions for TAa
_Add here some questions you have for us, in general or project-specific._


# Update for milestone 2

### CHANGE OF PREVIOUS PLAN

###### EVENTS

Once we began analyzing the tweet frequency, we understood how it was not possible to automate the linking process between the tweets and particular events in that same period linked to Trump. As a result, we have decided to devote more time to the analysis and manually search for links in the periods when the highest peaks were reached. While there are a large amount of events and scandals during Trump's presidency, we have not really found any connection to scandals. The only event driven increase in tweet frequency we have found are linked to "normal events" such as the party conventions and big debates (and election night of course). We will have to continue to investigate frequency increase from scandals during milestone 3.

###### FAKE NEWS ANALYSIS

We've decided to focus more on fake news analysis and also about finding data where Trump's tweets were fact-checked rather than starting an analysis on his retweets, since the fake news topic with its debunking seemed to us more interesting and more feasible with the data found during our search.

###### COMPARISON WITH TRUMP AND HILLARY, OBAMA
Obama doesn't really tweet much, so we realized that there's not much to compare on that front. Felt that a simple word analysis would not be enough so we decided to drop the Obama comparison. We will continue with the comparison between Trump and Hillary, hopefully with a new larger Hillary dataset for milestone 3.



### PLAN FOR MILESTONE 3

In short, our plan for MS3 (note changes and goals stated above) is to

* Pick out our most interesting results and expand on the discussion (maybe add some tiny bit of extra analysis).
* Redo/rethink/redesign our result visualizations.
* Use the selected results (with creative visuallization) to create a data story in the form of a blog post (using Jekyll and GitHub Pages).
