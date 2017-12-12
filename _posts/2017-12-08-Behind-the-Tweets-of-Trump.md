---
title: Behind Trump's Tweets
date: 2017-12-08 12:14:10
categories: DataStory Milestone3 DataAnalysis
---

# Behind Trump's Tweets

## Introduction

Describe the dataset and what we did. Goals, method, and so on.  
Pretty much rewrite some stuff from the project plan. Mention that many of our results compare what we consider the three main periods in Trump's life; before campaign, campaign, presidency.


## Contents
1. [General Exploration](#general-exploration)
2. [Topic Detection](#topic-detection)
3. [Sentiment Analysis](#sentiment-analysis)
4. [Usage of Fake News](#sentiment-analysis)
5. [Hillary Clinton Comparison](#hillary-clinton-comparison)


## General Exploration

As a starting point for the general exploration, let us take a look at Trump's total tweets per month has changed since he started tweeting in the middle of year 2009.

<html>
<iframe id="igraph" scrolling="no" style="border:none;" seamless="seamless" src="https://plot.ly/~smith-erik/3.embed?link=false" height="525" width="100%"></iframe>
</html>

Right away we see an (at least for us) rather suprising result. The total tweets per month were not at their highest levels during Trump's presidential campaign: June 16, 2015 to November 9, 2016. Note the sharp decline in tweets right after the election. This lower tweet frequency has remained though Trump's presidency.

The latest data was acquired in the middle of a November, thus the total for November 2017 is relatively low.

There is a notable spike in January year 2015. Analysing word usage in Trump's tweets from this month shows a high usage of words and phrases related to [The Celebrity Apprentice](https://en.wikipedia.org/wiki/The_Celebrity_Apprentice), a show Trump hosted until his announcement of candidacy. [Season 14](https://en.wikipedia.org/wiki/The_Apprentice_(U.S._season_14)) of this show aired almost entirely in January 2015, and aired more then 1 and a half years after the previous season. We think that this, combined with Trump perhaps knowing that this would be his last time hosting the show, contributed to a larger amount of tweets about the show than usual and hence towards a larger total amount of tweets that month.


### Distribution by hour of day

Continuing on with our general exploration, we now look at in what hour of the day Trump's tweets are posted (using the entire dataset from 2009 to present).

<html>
<iframe id="igraph" scrolling="no" style="border:none;" seamless="seamless" src="https://plot.ly/~smith-erik/9.embed?link=false" height="525" width="100%"></iframe>
</html>
The bar for each hour counts tweets during that hour.  
E.g. hour 14 counts tweets between 14:00:00 and 14:59:59.

So this look fairly normal, although we expected the frequency to drop off around midnight and not linger into 2 o'clock at night.

To find some more interesting results, let us instead do the same plot but for tree different periods: 
* Before campaign
* During campaign
* After campaign (presidency)

<html>
<iframe id="igraph" scrolling="no" style="border:none;" seamless="seamless" src="https://plot.ly/~smith-erik/15.embed?link=false" height="525" width="100%"></iframe>
</html>

We can immediately see some differences between the periods. During the campaign, compared to before and after, we have a much more constant flow of tweets throughout the whole day. The tweets during the campaign even maxes out at night! Before and after the number of tweets decrease as the night approaches, which is in line with our previously mentioned expectation. The stream of tweets into the night during the elecitons is, in hindsight, not a huge suprise. After all, the campaign machinery is expected to run at full steam 24/7.

Note the difference in spike-time between before campaign period and presidency period. It is in the evening for former and during office hours for the latter.

#### Comparision by source device

The vast majority of Trump's tweets (97%) are from either Android-, iPhone-, or web-based platforms/clients.

<html>
<iframe id="igraph" scrolling="no" style="border:none;" seamless="seamless" src="https://plot.ly/~smith-erik/17.embed?link=false" height="525" width="100%"></iframe>
</html>

Web clients are pretty much only used during office hours in the afternoon. Not very suprising. The curves for iPhone and Android are much more interesting though.

It does not seem like Trump use one brand during work and another during time off. No, if thas was the case then the curves for iPhone and Android would appear to "trade places" in some time interval during the day. Trump does not alternate in a consistent manner between iPhone and Android; the iPhone tweets continue in the evening as the Android ones are in sharp decline.
This discrepancy in device usage is interesting and will be explored further later.

*Hypothesis: Trump switches between web and android and staff is iPhone.  
Christian please add your device stuff here. Maybe device vs time to see if he stops/start using one of the devices?*


### Word Usage

![Wordcloud during campaign.](/assets/dt_proof2.png)

From this we can clearly see that the election is under way. The most used phrases and words are almost exclusively election related. One can see that Hillary was Trump's main opponents; "Hillary Clinton" and the pejorative nickname "Crooked Hillary" are both used a lot more than "Ted Cruz" and "Lyin' Ted" (small, see nose). Other terms of note are appearance of the word "poll" and a mentions several different states like South Carolina, New Hampshire, Wisconsin. The usage of small state names might be far and few between, but compare this to the word cloud for this precidency where they do not appear at all.

> "will" is everywhere

![Wordcloud during presidency.](/assets/wc_after_color.png)

In the word cloud from his presidency we first note the disappearance of Hillary related words and the rise of the term "Fake News". This particular phrase is thoroughly explored later. In addition to "Fake News", we also see some interesting new words like "Tax Cut" and "Russia" appear. This is of course due to the numerous Russia related scandals in Trump's cabinet and his controversial new tax policy.

Other things of note are an increased usage of "President" and "country". Also note the appearance of "ObamaCare"; Trump's reform intendend to replace it stirred up the discussion around Obama's health case reform.

![Wordcloud before campaign.](/assets/wc_before.png)

> New mask image here, any ideas?

Not suprisingly, between 2009 and Trump's candidacy announcement, Obama is often mentioned. We also see the words like "show" and "CelebApprentice" which are related to the show Trump hosted for many years up until 2015.

We have intentionally avoided mentioning "will" in earlier word clouds, and waited until now to highlight its large relative usage in *all* of our periods. Seems like Trump is always making new promises, not matter what situation he is currently in.


### Geolocation

> TODO: Have been mucking around with this, have not managed to get it to work :/



## Topic Detection

## Sentiment Analysis

## Usage of Fake News

## Hillary Clinton Comparison

> Redoing the comparison graph for Hillary, will upload later today.


![Wordcloud for Hillary Clinton during campaign.](/assets/hc_proof2.png)



