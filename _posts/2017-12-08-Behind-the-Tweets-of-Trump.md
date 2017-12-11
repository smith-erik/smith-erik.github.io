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

>TODO: Check out 2015 spike.


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

> TODO
  Change masks and colours to something interesting. Also color words from image. E.g. use shape of Trump's head with "correct" colours for campaign word usage.


![Wordcloud during campaign.](/assets/dt_proof2.png)

> Phrases of interest are phrases such as "Crooked Hillary", "Make America Great Again", and a large proportion of "will" and "people". Note the appearance of "poll" during the election.

![Wordcloud during presidency.](/assets/wc_after_color.png)

>The rise of the term "Fake News" is explored thoroughly later. Note the disappearance of Hillary related words.

![Wordcloud before campaign.](/assets/wc_before.png)

>Here we have mentions of Obama (Obama/president) instead of Hillary.

### Geolocation

> TODO: Add this later, check if folium maps work with Jekyll.  
Might need a plug-in.



## Topic Detection

## Sentiment Analysis

## Usage of Fake News

## Hillary Clinton Comparison


![Hillary Clinton's total tweets per week during election.](/assets/hc_total_week.png)

Compare spike with Trump's tweet amount those couple of weeks.


Word cloud for Hillary during campaign.
Note TODO comment on mask and colour in Trump word usage section.

![Wordcloud for Hillary Clinton during campaign.](/assets/hc_proof2.png)



