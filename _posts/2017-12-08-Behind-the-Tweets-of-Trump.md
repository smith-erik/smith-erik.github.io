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

> Caption test

Right away we see an (at least for us) rather suprising result. The total tweets per month were not at their highest levels during Trump's presidential campaign: June 16, 2015 to November 9, 2016. Note the sharp decline in tweets right after the election. This lower tweet frequency has remained though Trump's presidency.

The latest data was acquired in the middle of a November, thus the total for November 2017 is relatively low.

>TODO: Check out 2015 spike.

### Distribution by hour of day

Continuing on with our general exploration, we now look at in what hour of the day Trump's tweets are posted (using the entire dataset from 2009 to present).

![Trump's tweets per hour of day since year 2009.](/assets/hour_of_day.png)  
> Bar for hour e.g. hour 14 counts tweets between 14:00:00 and 14:59:59.

So this look fairly normal, although we expected the frequency to drop off around midnight and not linger into 2 o'clock at night.

> Could this be due to time zone differences? Check out and comment on this?

To find some more interesting results, let us instead do the same plot but for tree different periods: 
* Before campaign
* During campaign
* After campaign (presidency)

We can immediately see some differences between the periods. During the campaign, compared to before and after, we have a much more constant flow of tweets throughout the whole day. The tweets during the campaign even maxes out at night! Before and after the number of tweets decrease as the night approaches, which is in line with our previously mentioned expectation. The stream of tweets into the night during the elecitons is, in hindsight, not a huge suprise. After all, the campaign machinery is expected to run at full steam 24/7.


## Topic Detection

## Sentiment Analysis

## Usage of Fake News

## Hillary Clinton Comparison

