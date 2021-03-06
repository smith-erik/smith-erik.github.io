---
title: Behind Trump's Tweets
date: 2017-12-08 12:14:10
categories: DataStory Milestone3 DataAnalysis
---

# Behind Trump's Tweets

## Introduction

Describe the dataset and what we did. Goals, method, and so on.  
Pretty much rewrite some stuff from the project plan.  
Mention that many of our results compare what we consider the three main periods in Trump's life; before campaign, campaign, presidency.


## Contents
1. [General Exploration](#general-exploration)
2. [Topic Detection](#topic-detection)
3. [Sentiment Analysis](#sentiment-analysis)
4. [Usage of Fake News](#sentiment-analysis)
5. [Hillary Clinton Comparison](#hillary-clinton-comparison)


## General Exploration

As a starting point for the general exploration, let us take a look at Trump's total tweets per month has changed since he started tweeting in the middle of year 2009.

![Trump's total tweets per month since year 2009.](/assets/total_month.png)

Right away we see an (at least for us) rather suprising result. The total tweets per month were not at their highest levels during Trump's presidential campaign: June 16, 2015 to November 9, 2016. Note the sharp decline in tweets right after the election. This lower tweet frequency has remained though Trump's presidency.

The latest data was acquired in the middle of a November, thus the total for November 2017 is relatively low.

>TODO: Check out 2015 spike.


### Distribution by hour of day

Continuing on with our general exploration, we now look at in what hour of the day Trump's tweets are posted (using the entire dataset from 2009 to present).

![Trump's tweets per hour of day since year 2009.](/assets/hour_of_day.png)  
> The bar for each hour counts tweets during that hour.  
E.g. hour 14 counts tweets between 14:00:00 and 14:59:59.

So this look fairly normal, although we expected the frequency to drop off around midnight and not linger into 2 o'clock at night.

> TODO: Could this be due to time zone differences? Check out and comment on this?

To find some more interesting results, let us instead do the same plot but for tree different periods: 
* Before campaign
* During campaign
* After campaign (presidency)

![Trump's tweets per hour of day since year 2009.](/assets/hour_periods.png)

We can immediately see some differences between the periods. During the campaign, compared to before and after, we have a much more constant flow of tweets throughout the whole day. The tweets during the campaign even maxes out at night! Before and after the number of tweets decrease as the night approaches, which is in line with our previously mentioned expectation. The stream of tweets into the night during the elecitons is, in hindsight, not a huge suprise. After all, the campaign machinery is expected to run at full steam 24/7.

Note the difference in spike-time between before campaign period and presidency period. It is in the evening for former and during office hours for the latter.

#### Comparision by source device

The vast majority of Trump's tweets (97%) are from either Android-, iPhone-, or web-based platforms/clients.

![Trump's tweets per hour of day since year 2009.](/assets/hour_devices.png)

Web clients are pretty much only used during office hours in the afternoon. Not very suprising. The curves for iPhone and Android are much more interesting though.

It does not seem like Trump use one brand during work and another during time off. No, if thas was the case then the curves for iPhone and Android would appear to "trade places" in some time interval during the day. Trump does not alternate in a consistent manner between iPhone and Android; the iPhone tweets continue in the evening as the Android ones are in sharp decline.
This discrepancy in device usage is interesting and will be explored further later.

*Hypothesis: Trump switches between web and android and staff is iPhone.  
Christian please add your device stuff here. Maybe device vs time to see if he stops/start using one of the devices?*


### Word Usage

> TODO
  Change masks and colours to something interesting. Also color words from image. E.g. use shape of Trump's head with "correct" colours for campaign word usage.


![Wordcloud during campaign.](/assets/wc_during.png)

> Phrases of interest are phrases such as "Crooked Hillary", "Make America Great Again", and a large proportion of "will" and "people". Note the appearance of "poll" during the election.

![Wordcloud during presidency.](/assets/wc_after.png)

>The rise of the term "Fake News" is explored thoroughly later. Note the disappearance of Hillary related words.

![Wordcloud before campaign.](/assets/wc_before.png)

>Here we have mentions of Obama (Obama/president) instead of Hillary.

### Geolocation

> TODO: Add this later, check if folium maps work with Jekyll.  
Might need a plug-in.



## Topic Detection

As explained in David Robertson's [article](http://varianceexplained.org/r/trump-tweets/) Trump tweets from an Android
phone or from a laptop. All the tweets from an iPhone are tweets made by his staff, so we decided to exclude them from
our analysis (note: we found out that Trump changed his mobile phone to an iPhone on March 2017. Every result reported
in this section is still valid, but until March 2017).
For the reason above, we excluded tweets from iPhone as well as the retweets, because they are not preparatory for
studying Trump's behavior.

Using LDA (Latent Dirichlet Allocation), we divided the tweets in 8 different clusters: every cluster contained
tweets of the same topic. Actually, we observed that some of these clusters were very similar (for example two of them
were referring to different aspects of Trump's business) and we decided to aggregate them, another one (politics) was so
full of tweets that we decided to split the cluster in other clusters, this time searching for keywords, such as obama,
china, government...
After this "topic processing", we ended up with: business, shows, interviews and debates, various, shows and all the
topics deriving from politics: China, Obama, Foreign Politics (contains also China topic) and Internal Politics (contains
also Obama topic).
We noticed that tweets regarding Hillary were not part of the clustering and since we thought it was really important
taking account of those tweets as well, we made a keyword search for these tweets on the dataset slice 2016/17.
Below you can find some examples of tweets from every topic:

1) Business
    * Those five hotels includeTrump International Hotel & Tower New York, Trump Soho New York, Trump International Hotel & Tower Chicago...
    * ...Trump International Hotel Las Vegas, and Trump International Hotel & Tower Waikiki Beach Walk. http://tlworldsbest.roiresearch.com/.
    * Spent a beautiful weekend golfing at Trump National Golf Club Westchester and Trump National Golf Club Bedminster.
2) Various
    * .@AlexSalmond –the man who let terrorist (Pan Am Flight 103) al-Megrahi  go, lost another battle over ugly wind turbines in Blackdog.
    * “Deals are my art form.  I like making deals, preferably big deals.” – The Art of The Deal'
    * Today's open call drew thousands of  eager applicants. It was an impressive group,  I enjoyed meeting them. We've got some great candidates!
3) Shows
    * I appeared on David Letterman last night. And don't forget Sunday night---the first episode of Celebrity Apprentice will be on NBC at 9 pm.
    * ALso coming up: The Celebrity Apprentice returns. Sunday night March 6 at 9 pm EST http://www.nbc.com/the-apprentice/'
    * Don't forget! Sunday night at 9 pm EST on @nbc--Celebrity Apprentice is back! Tune in for a great show. @ApprenticeNBC
4) Interviews and Debates
    * A clip from my @foxandfriends interview discussing how  Newsmax-@iontv debate is determining the GOP primary polls http://t.co/yqIzaX1W
    * My @FoxNews interview with @megynkelly discussing the 2012 election and the Newsmax-@iontv debate http://t.co/TotTpvNZ
    * My interview on @theviewtv discussing #TimeToGetTough, the GOP primary and the Newsmax-@iontv  debate(starts at 23:00) http://t.co/ROcUyAXe
5) China
    * China has 5 oil projects in Iraq and we didn't get anything from the Iraqis except asked to leave. Iraq is going (cont) http://t.co/KhujI5YC
    * Now China 'calls in' US diplomats to lecture them on their illegal escapades. http://t.co/LWhbf4ml  The new reality. @BarackObama is weak.
    * When will the US government finally classify China as a currency manipulator? China is robbing us blind and @BarackObama defends them.
6) Obama
    * He is destroying our country:@BarackObama has requested to raise our debt limit to over $16.4Trillion by the end (cont) http://t.co/A5DGJvhP
    * The House Republicans and Democrats are finally unanimous! Yesterday they voted down @BarackObama's $3.6T budget (cont) http://t.co/tOax00jj
    * He thinks that the wealth you create belongs to the gov't. @BarackObama doesn't respect the fact that the money he wastes belongs to us.
7) Foreign Politics
    * China has 5 oil projects in Iraq and we didn't get anything from the Iraqis except asked to leave. Iraq is going (cont) http://t.co/KhujI5YC
    * "So, if Iran is going to take over the oil, I say we take over the oil first by hammering out a cost-sharing plan with Iraq."#TimeToGetTough
    * Why did we spend billions of our money on Libya if we are not going to get any of the country's oil? What do we get out of this?
8) Internal Politics
    * The  @SuperCommittee must cut spending, not raise taxes. Washington has a spending problem, not a revenue problem.
    * The Washington Establishment will never rein in government spending, waste, fraud and abuse. A great thinker and outsider is needed.
    * He is destroying our country:@BarackObama has requested to raise our debt limit to over $16.4Trillion by the end (cont) http://t.co/A5DGJvhP
9) Hillary
    * Vladimir Putin said today about Hillary and Dems: "In my opinion, it is humiliating. One must be able to lose with dignity."  So true!
    * The so-called "A" list celebrities are all wanting tixs to the inauguration, but look what they did for Hillary, NOTHING. I want the PEOPLE!
    * I have not heard any of the pundits or commentators discussing the fact that I spent FAR LESS MONEY on the win than Hillary on the loss!



## Sentiment Analysis

Since now we have topics to work on, we can make some analysis on them.
We thought it would have been interesting to study the emotions that Trump was expressing while writing those tweets.
In order to do so, we downloaded the [NRC Emotion Lexicon](http://saifmohammad.com/WebPages/NRC-Emotion-Lexicon.htm)
kindly offered by the National Research Council Canada, created by Saif Mohammad. We used the
'NRC-Emotion-Lexicon-Wordlevel-v0.92' dataset, that contains 14.000 words. Every word is associated with 8 emotions and
a positive or negative value.
To evaluate the emotions in every tweet, we searched for every word contained in this dataset in every tweet clustered.
When a word was found in some tweet, its emotions values were added to the stats of that specific tweet.

The bar plots displayed below show some curious information that we found.

> TODO: add the 9 vertical barplots (one per topic)

We can see that generally Trump have more positive tweets than negative, he needs people to like him for his business
and for his politics. More specifically we can find a confirm of this fact looking at the sentiments in Business, Shows
and Interviews. Of course, when he speaks about his business, he has to be positive: we can see an high level of trust
arising in his tweets. For what concerns shows, we can say very similar things: he produces and leads a tv show called
'Celebrity Apprentice' and he often tweets about it. He needs to transmit positive vibes to convince people that his
show is worth watching. A very similar pattern for similar reasons is found in the interviews and debate topic.
For what concerns politics we have different trends: there are high level of anger and fear, with an high level of
trust, in every topic concerning politics except for Obama and Hillary, that are a little different. When it comes to
politics he generally have slightly more negative tweets than positive. The interesting thing is that his level of trust
is always highest in every topic compared to the other emotions as we expected, except when he talks about Hillary
Clinton or Barack Obama.
Clinton: the highest emotion are anger, fear, disgust and sadness, in this order. Note that it's not something that we
were not expecting, but the fact that the trust level is lower than four other negative emotions it's very relevant.
Obama: here positive and negative emotions are almost at the same level, even if sadness is the highest emotion we can
find. Levels of trust are second, so differently from Clinton topic, his more trustful when he speaks about Obama than
Clinton.
Note that the levels of joy are often low compared to the other emotions, except for shows and business.

For completeness, we report also a simple analysis on al tweets, in order to see which emotions prevail in Trump's tweets.

> TODO: add single vertical barplot - sentiment on all tweets

We can see that our assumption that Trump's tweets are generally more positive holds. As we already stated studying the
topics, the trust emotion is generally the most relevant and joy is the lowest with surprise. The other emotions lay on
the same level.

Until this moment, we have seen what are Trump's reactions. But what about his public? We studied the retweet and
favorite counts on the different topics and this is what we found out.

> TODO: add single vertical barplot - number of retweets and favorites in different topics

It's simple to observe that the number of retweets and favorites are way higher when they are about Hillary Clinton.
These tweets are from 2016 and 2017, so as we know, during the election campaign Trump's tweets reached a very high
popularity. A further study showed us that every topic with higher levels of retweets and favorites (such as internal
and foreign politics, interviews and debates) increases these levels during that period.
Following the same method, we studied the most retweeted and liked emotions, and this led to interesting conclusions.

> TODO: single vertical barplot - number of retweets and favorites for every emotion

In order to conclude the sentiment analysis, we think it would be comprehensive add a final overview of the emotions behind the every tweet.

> TODO: single vertical barplot - average of the emotions on all tweets

We can see that our assumption that Trump's tweets are generally more positive holds. As we already stated studying
the topics, the trust emotion is generally the most relevant and joy is the lowest with surprise. The other emotions lay
on the same level.

## Word Usage in topics

As a conclusion of this section of topics and emotions, we want to show you the word usage in every topic. Of course,
some words were deleted as not interesting (stopwords such as 'the', 'a', 'an', 'one', etc...).

> TODO: multiple horizonalt barplots - word usage of topics

> TODO: think what to say

## Usage of Fake News

## Hillary Clinton Comparison


![Hillary Clinton's total tweets per week during election.](/assets/hc_total_week.png)

Compare spike with Trump's tweet amount those couple of weeks.


Word cloud for Hillary during campaign.
Note TODO comment on mask and colour in Trump word usage section.

![Wordcloud for Hillary Clinton during campaign.](/assets/hc_wc.png)



