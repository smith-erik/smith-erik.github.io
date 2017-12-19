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

To further explore this, we compare the number of tweets from Android and iPhone during the election.

<html>
<iframe id="igraph" scrolling="no" style="border:none;" seamless="seamless" src="https://plot.ly/~smith-erik/45.embed?link=false" height="525" width="100%"></iframe>
</html>

The tweets from iPhone peaks during October year 2016, the month before election day (November 8, 2016). It seems reasonable to assume that the month leading up to the election more tweets will written by campaign staff, most of whom seemingly use iPhones.

As a closing note on the source devices we would like to point out that there has been no tweets from an Android device since March year 2017. This could be interpreted as Trump replacing his Android with an iPhone. 

<html>
<iframe id="igraph" scrolling="no" style="border:none;" seamless="seamless" src="https://plot.ly/~smith-erik/47.embed?link=false" height="525" width="100%"></iframe>
</html>


### Word Usage

![Wordcloud during campaign.](/assets/dt_proof2.png)

From this we can clearly see that the election is under way. The most used phrases and words are almost exclusively election related. One can see that Hillary was Trump's main opponents; "Hillary Clinton" and the pejorative nickname "Crooked Hillary" are both used a lot more than "Ted Cruz" and "Lyin' Ted" (small, see nose). Other terms of note are appearance of the word "poll" and a mentions several different states like South Carolina, New Hampshire, Wisconsin. The usage of small state names might be far and few between, but compare this to the word cloud for this precidency where they do not appear at all.

![Wordcloud during presidency.](/assets/wc_after_color.png)

In the word cloud from his presidency we first note the disappearance of Hillary related words and the rise of the term "Fake News". This particular phrase is thoroughly explored later. In addition to "Fake News", we also see some interesting new words like "Tax Cut" and "Russia" appear. This is of course due to the numerous Russia related scandals in Trump's cabinet and his controversial new tax policy.

Other things of note are an increased usage of "President" and "country". Also note the appearance of "ObamaCare"; Trump's reform intendend to replace it stirred up the discussion around Obama's health case reform.

![Wordcloud before campaign.](/assets/wc_before_color.png)

Not suprisingly, between 2009 and Trump's candidacy announcement, Obama is often mentioned. We also see the words like "show" and "CelebApprentice" which are related to the show Trump hosted for many years up until 2015.

We have intentionally avoided mentioning "will" in earlier word clouds, and waited until now to highlight its large relative usage in *all* of our periods. Seems like Trump is always making new promises, not matter what situation he is currently in.


### Geolocation

Some of the tweets from the election are geotagged. Let us make a quick choropleth over number of geotags, state-wise.

![Geotagged Tweets During Campaign](/assets/trump_map.png)

The results are as expected; there is a clear connection between [Swing States](https://en.wikipedia.org/wiki/Swing_state) and number of times geotagged.



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

1. Business  
    * Those five hotels includeTrump International Hotel & Tower New York, Trump Soho New York, Trump International Hotel & Tower Chicago...  
    * ...Trump International Hotel Las Vegas, and Trump International Hotel & Tower Waikiki Beach Walk. http://tlworldsbest.roiresearch.com/.  
    * Spent a beautiful weekend golfing at Trump National Golf Club Westchester and Trump National Golf Club Bedminster.  
2. Various  
    * .@AlexSalmond –the man who let terrorist (Pan Am Flight 103) al-Megrahi  go, lost another battle over ugly wind turbines in Blackdog.  
    * “Deals are my art form.  I like making deals, preferably big deals.” – The Art of The Deal'  
    * Today's open call drew thousands of  eager applicants. It was an impressive group,  I enjoyed meeting them. We've got some great candidates!  
3. Shows  
    * I appeared on David Letterman last night. And don't forget Sunday night---the first episode of Celebrity Apprentice will be on NBC at 9 pm.  
    * ALso coming up: The Celebrity Apprentice returns. Sunday night March 6 at 9 pm EST http://www.nbc.com/the-apprentice/'  
    * Don't forget! Sunday night at 9 pm EST on @nbc--Celebrity Apprentice is back! Tune in for a great show. @ApprenticeNBC  
4. Interviews and Debates  
    * A clip from my @foxandfriends interview discussing how  Newsmax-@iontv debate is determining the GOP primary polls http://t.co/yqIzaX1W  
    * My @FoxNews interview with @megynkelly discussing the 2012 election and the Newsmax-@iontv debate http://t.co/TotTpvNZ  
    * My interview on @theviewtv discussing #TimeToGetTough, the GOP primary and the Newsmax-@iontv  debate(starts at 23:00) http://t.co/ROcUyAXe  
5. China  
    * China has 5 oil projects in Iraq and we didn't get anything from the Iraqis except asked to leave. Iraq is going (cont) http://t.co/KhujI5YC  
    * Now China 'calls in' US diplomats to lecture them on their illegal escapades. http://t.co/LWhbf4ml  The new reality. @BarackObama is weak.  
    * When will the US government finally classify China as a currency manipulator? China is robbing us blind and @BarackObama defends them.  
6. Obama  
    * He is destroying our country:@BarackObama has requested to raise our debt limit to over $16.4Trillion by the end (cont) http://t.co/A5DGJvhP  
    * The House Republicans and Democrats are finally unanimous! Yesterday they voted down @BarackObama's $3.6T budget (cont) http://t.co/tOax00jj  
    * He thinks that the wealth you create belongs to the gov't. @BarackObama doesn't respect the fact that the money he wastes belongs to us.  
7. Foreign Politics  
    * China has 5 oil projects in Iraq and we didn't get anything from the Iraqis except asked to leave. Iraq is going (cont) http://t.co/KhujI5YC  
    * "So, if Iran is going to take over the oil, I say we take over the oil first by hammering out a cost-sharing plan with Iraq."#TimeToGetTough  
    * Why did we spend billions of our money on Libya if we are not going to get any of the country's oil? What do we get out of this?  
8. Internal Politics  
    * The  @SuperCommittee must cut spending, not raise taxes. Washington has a spending problem, not a revenue problem.  
    * The Washington Establishment will never rein in government spending, waste, fraud and abuse. A great thinker and outsider is needed.  
    * He is destroying our country:@BarackObama has requested to raise our debt limit to over $16.4Trillion by the end (cont) http://t.co/A5DGJvhP  
9. Hillary  
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

<html>
<iframe id="igraph" scrolling="no" style="border:none;" seamless="seamless" src="https://plot.ly/~smith-erik/19.embed?link=false" height="525" width="100%"></iframe>
</html>

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

<html>
<iframe id="igraph" scrolling="no" style="border:none;" seamless="seamless" src="https://plot.ly/~smith-erik/27.embed?link=false" height="525" width="100%"></iframe>
</html>

We can see that our assumption that Trump's tweets are generally more positive holds. As we already stated studying the
topics, the trust emotion is generally the most relevant and joy is the lowest with surprise. The other emotions lay on
the same level.

Until this moment, we have seen what are Trump's reactions. But what about his public? We studied the retweet and
favorite counts on the different topics and this is what we found out.

<html>
<iframe id="igraph" scrolling="no" style="border:none;" seamless="seamless" src="https://plot.ly/~smith-erik/23.embed?link=false" height="525" width="100%"></iframe>
</html>

It's simple to observe that the number of retweets and favorites are way higher when they are about Hillary Clinton.
These tweets are from 2016 and 2017, so as we know, during the election campaign Trump's tweets reached a very high
popularity. A further study showed us that every topic with higher levels of retweets and favorites (such as internal
and foreign politics, interviews and debates) increases these levels during that period.
Following the same method, we studied the most retweeted and liked emotions, and this led to interesting conclusions.

<html>
<iframe id="igraph" scrolling="no" style="border:none;" seamless="seamless" src="https://plot.ly/~smith-erik/25.embed?link=false" height="525" width="100%"></iframe>
</html>

It's interesting to note that the emotions with a negative meaning are the most retweeted and favorited. Even more
interesting is that the the second last emotion liked by the public is the dominant emotion in Trump's tweets: trust.
One explanation could be that, as we saw before (for example in Hillary's topic) these emotions (anger, disgust and
fear) are the ones that characterize politics, especially when it comes to important people, like ex-President Obama and
her rival during elections.

## Word Usage in topics

As a conclusion of this section of topics and emotions, we want to show you the word usage in every topic. Of course,
some words were deleted as not interesting (stopwords such as 'the', 'a', 'an', 'one', etc...).

![Word usage in the topics.](/assets/L6_border.png)

We can see that the most used words in every cluster reflect the meaning of the topic. For instance, in business there
is a lot of usage of the words golf, hotel, ties, tower, shirts (all properties and merchandise of Trump), in interviews
we can see that the most used words are interview, people, foxnews, job, foxandfriends, and so on for every other topic.
In shows there are a lot of references about Trump's show Celebrity Apprentice, in China Obama often is quoted as well
as the oil issue.


## Usage of Fake News

For this task we decided to consider three different period of time in order to see when the term "fake news" arise. We took the campaign period, the president-elect period and the presidency period. The main goal of this part is to see when the president started using this term, how many times he used it and see if we can get a correlation between when he uses the term and some specific situations as scandals or periods of high pressure on his work or on his administration. 

### Campaign period (from 2016-02-01 to 2016-11-08)

For each period we used a simple regex to find the fake news term: "fake news|fakenews" without case sensitive. 
After we applied this regex on the specific period we obtained zero matches, in order to be sure we searched only for the word "fake" and the word "news" separately.
For the word "fake" we obtained four matches that were not related with the "fake news" term and for the word "news" most of the matches that we had were tweets about cited media like for example @FoxNews. Therefore, we were sure that the "fake news" term did not arise on his twitter account during his campaign period.

### President-Elect period (2016-11-09 to 2017-01-20)

We applied the same regex to the tweets of this period and we found 11 matches that you can see here:

| Matched tweets| 
| ------------- |
| 'Reports by @CNN that I will be working on The Apprentice during my Presidency, even part time, are ridiculous &amp; untrue - FAKE NEWS!'|
| 'FAKE NEWS - A TOTAL POLITICAL WITCH HUNT!'|
| 'RT @MichaelCohen212: I have never been to Prague in my life. #fakenews https://t.co/CMil9Rha3D'|
| "'BuzzFeed Runs Unverifiable Trump-Russia Claims' #FakeNews \nhttps://t.co/d6daCFZHNh"|
| 'I win an election easily, a great "movement" is verified, and crooked opponents try to belittle our victory with FAKE NEWS. A sorry state!'|
| 'Intelligence agencies should never have allowed this fake news to "leak" into the public. One last shot at me.Are we living in Nazi Germany?' | 
| "We had a great News Conference at Trump Tower today. A couple of FAKE NEWS organizations were there but the people truly get what's going on"|  
| '.@CNN is in a total meltdown with their FAKE NEWS because their ratings are tanking since election and their credibility will soon be gone!'|
| 'Totally made up facts by sleazebag political operatives, both Democrats and Republicans - FAKE NEWS! Russia says nothing exists. Probably...'|
| 'much worse - just look at Syria (red line), Crimea, Ukraine and the build-up of Russian nukes. Not good! Was this the leaker of Fake News?'|
| "to the U.S., but had nothing to do with TRUMP, is more FAKE NEWS. Ask top CEO's of those companies for real facts. Came back because of me!"|

We noticed that in this 11 tweets the fake news term was related mostly with CNN and Russia. Specially the rise of the term was due to release of a non-verified paper by Buzzfeed containing strong claims about Trump and Russia ties and possibility that Trump could be blackmailed by the Russian governement. The dossier released from Buzzfeed was not recognized as official and president Trump was furious about the easiness of how this information leaked to the public. He over reacted to this leak, attacking the intelligence agencies and trying to discredit the Media. For more information, here you have the story described by the New York Times: [buzzfeed donald trump and russia](https://www.nytimes.com/2017/01/10/business/buzzfeed-donald-trump-russia.html)


### Presidency Period (2017-01-20 to 2017-11-05)

In this period we found 132 matched tweets with our regex, therefore we decided to deepen our observations grouping our tweets in different intervals in order to see if we can get some useful insights. We used three types of intervals:

1. Month
2. Week of the year
3. Date

What we were hoping to find using these intervals was to see if the matched tweets in a specific interval (specific month, week or date) were related to some critic event linked to president Trump or his administration. We thought that the most interesting interval to use was "by week of the year" and, as you will see this interval gave us the most interesting observations from these matched tweets. Therefore we will start with "by week of the year" interval with a more in-depth analysis. For clarity we will then show our results for the other two intervals.

### Analysis by week of the year

We grouped our matched tweets by week of the year and we count the number of matched tweets in each week, here you can have a clear visualization of our results:

<html>
<iframe id="igraph" scrolling="no" style="border:none;" seamless="seamless" src="https://plot.ly/~smith-erik/39.embed?link=false" height="525" width="100%"></iframe>
</html>

The mean of the occurences by week is equal to **_3.14_** and we have two clear peaks with the 26th week and the 39th week. After we saw these values, we decided to focus on all the weeks that have the number of matched tweets higher than the mean. In total we considered 14 weeks, and for each of these weeks we have done a research on the tweets of that specific week in order to see if we could obtain a correlation to some specific fact or serious situation linked with president Trump.

For the sake of clarity and conciseness, we decided to show you the most interesting weeks that we found among the 14 weeks that we have analyzed. That being said, we can say that for each of all the 14 weeks that we have considered, the main point that we have found is that president Trump uses the "fake news" term when he or his administration is in difficult or stressful situations or under accuse for their actions. He uses these tweets in order to downsize the graveness of the situation, giving to his followers his own interpretation of facts and trying to reduce the trust on the media that he does not approve.

Now we can start by showing you the analyzed week that took the most our attention:

### Week 39th (from September 25, 2017 to October 1, 2017)

In this week we have 11 matched tweets, let us show you them:


| Matched tweets| 
| ------------- |
| '.@CNN is #FakeNews. Just reported COS (John Kelly) was opposed to my stance on NFL players disrespecting FLAG, ANTHEM, COUNTRY. Total lie!'                  |
|  'Facebook was always anti-Trump.The Networks were always anti-Trump hence,Fake News, @nytimes(apologized) &amp; @WaPo were anti-Trump. Collusion?'           |
|  'Fake News CNN and NBC are going out of their way to disparage our great First Responders as a way to "get Trump." Not fair to FR or effort!'                |
|  "The Fake News Networks are working overtime in Puerto Rico doing their best to take the spirit away from our soldiers and first R's. Shame!"                |
|  'Despite the Fake News Media in conjunction with the Dems, an amazing job is being done in Puerto Rico. Great people!'                                       |
|  'To the people of Puerto Rico:\nDo not believe the #FakeNews!\n#PRStrong🇵🇷'                                                                                   | 
|  "@ricardorossello ......#FakeNews critics are working overtime, but we're getting great marks from the people that truly matter! \n#PRStrong🇵🇷"            | 
|  'Because of #FakeNews my people are not getting the credit they deserve for doing a great job. As seen here, they are ALL doing a GREAT JOB!'                |
|  'In analyzing the Alabama Primary race, Fake News always fails to mention that the candidate I endorsed went up MANY points after Election!'                 |
|  'In analyzing the Alabama Primary race,FAKE NEWS always fails to mention that the candidate I endorsed went up MANY points after endorsement!'               | 
|  'We have done a great job with the almost impossible situation in Puerto Rico. Outside of the Fake News or politically motivated ingrates,...'               |


#### Observations

The tweets are mostly dealing with the situation in Puerto Rico following the devastation caused by Hurricane Maria. Trump felt attacked becuase his administration was blamed of not taking adequate decisions in order to handle this natural disaster. He has come back to the attention of the media after he accused the mayor of San Juan, Carmen Yulín Cruz (Cruz critized Trump administration about how they wer dealing the complex situation). As we said at the beginning of this part, you can see a link between the usage of the term "fake news" after he is been under accuse or under stress situation. Trump over reacted and he tried to divert attention from the main problem by discrediting the media and by blaming someone else for the accusations that he received. If you want to deepen this story you can find more information in these two articles:

1. from Washington Post:   [Trump doesnt get it on puerto rico. He just proved it by lashing out at san juans mayor](https://www.washingtonpost.com/news/the-fix/wp/2017/09/30/trump-doesnt-get-it-on-puerto-rico-he-just-proved-it-by-lashing-out-at-san-juans-mayor/?utm_term=.693061c95fe5)

2. from CNN:   [Trump tweets on Puerto Rico](http://edition.cnn.com/2017/10/01/politics/trump-tweets-puerto-rico/index.html)


### Week 7 (from February 13, 2017 to February 19, 2017)

First, let us show you the 6 matches that we have in this week:

| Matched tweets| 
| ------------- |
| 'The fake news media is going crazy with their conspiracy theories and blind hatred. @MSNBC &amp; @CNN are unwatchable. @foxandfriends is great!'           |
|  'FAKE NEWS media, which makes up stories and "sources," is far more effective than the discredited Democrats - but they are fading fast!'                  |
|  'The Democrats had to come up with a story as to why they lost the election, and so badly (306), so they made up a story - RUSSIA. Fake news!'             |
|  'The FAKE NEWS media (failing @nytimes, @CNN, @NBCNews and many more)    is not my enemy, it is the enemy of the American people. SICK!'                   |
|  'The FAKE NEWS media (failing @nytimes, @NBCNews, @ABC, @CBS, @CNN) is not my enemy, it is the enemy of the American People!'                              |
|  "Don't believe the main stream (fake news) media.The White House is running VERY WELL. I inherited a MESS and am in the process of fixing it."             | 


#### Observations

All these tweets came after a serious situation caused by new information regarding the Trump's administration connections with Russia. In this week, the national security advisor, Mike Flynn, resignated because it was revealed that he had misled Vice President Mike Pence and other top White House officials about his conversations with the Russian ambassador regarding the sanctions to Russia in December. Trump was unhappy about the fact that US media covered mostly this problem of his administration, therefore he tried to blame the media and the Democrats by saying that all these stories were made up. His accusations find their climax in the tweet in which he indicates various media as enemies of the American people. 
For more information about these facts you can check the following links:

1. from the Independent: [Donald Trump dismisses allegations over Russia as 'conspiracy theories' fed to media by intelligence agencies](http://www.independent.co.uk/news/world/americas/donald-trump-russia-intelligence-fake-news-media-campaign-conspiracy-fox-cnn-msnbc-a7581211.html)

2. from New York Times: [Trump calls the News Media the ‘Enemy of the American People’](https://www.nytimes.com/2017/02/17/business/trump-calls-the-news-media-the-enemy-of-the-people.html)

3. from Business Insider: [Trump lashes out at the media, says the 'the White House is running very well'](http://www.businessinsider.com/trump-lashes-out-the-media-says-he-inherited-a-mess-2017-2)

### Week 21 (from May 22, 2017 to May 28, 2017)

In this week we have 4 matches:

| Matched tweets| 
| ------------- |
| 'It is my opinion that many of the leaks coming out of the White House are fabricated lies made up by the #FakeNews media.'                                |
|  "Whenever you see the words 'sources say' in the fake news media, and they don't mention names...."                                                       |
|  "....it is very possible that those sources don't exsist but are made up by fake news writers. #FakeNews is the enemy!"                                   |
|  'Does anyone notice how the Montana Congressional race was such a big deal to Dems &amp; Fake News until the Republican won? V was poorly covered'        |


#### Observations

All these tweets (expect for the one regarding the Montanta Congressional race) are linked again to another difficult situation for president Trump, namely, the scandal about his son in law Jared Kushner and his ties with the russian government. It was then reported that Jared Kushner had asked the Russian ambassador to create a secret channel with Russia using Russia’s communication systems. The communications were intercepted by US intelligence and then leaked to The Washington Post. President Trump dealt with this problem trying again to label a scandal as a fake news, again he tried to take the focus away from the main problem. If you want to have a clearer view on this topic you can follow the next link:

* from the Independent: [Donald Trump calls leaks 'fabricated lies' as he returns to mounting crisis over Jared Kushner's alleged Russia links]( http://www.independent.co.uk/news/world/americas/us-politics/donald-trump-washington-mounting-crisis-jared-kusher-backchannel-russia-latest-a7760481.html) 


### Week 29 (July 17, 2017 to July 23, 2017)

As done before, here we have the table with the 4 matched tweets in this week:

| Matched tweets| 
| ------------- |
| 'Fake News story of secret dinner with Putin is "sick." All G 20 leaders, and spouses, were invited by the Chancellor of Germany. Press knew!'        |
|  'The Fake News is becoming more and more dishonest! Even a dinner arranged for top 20 leaders in Germany is made to look sinister!'                  |
|  'Sean Spicer is a wonderful person who took tremendous abuse from the Fake News Media - but his future is bright!'                                   |
|  'While all agree the U. S. President has the complete power to pardon, why think of that when only crime so far is LEAKS against us.FAKE NEWS'       |

#### Observations

The first two tweets are about a statement of a senior white house official to CNN, regarding a second meeting between Putin and Trump during the G20 for nearly one hour. Another uncomfortable situation for president-elect Trump, who tried again to reduce the importance of the fact. 
For more information on this story, follow the next link: 

* From CNN: [Trump, Putin met for nearly an hour in second G20 meeting](http://edition.cnn.com/2017/07/18/politics/trump-putin-g20/index.html)

The third tweet concerns the resignation of White House press secretary Sean Spicer, who took this decision after he disagreed with president trump about hiring Antony Scaramucci. This resignation and the new entry Antony Scaramucci added more instability to the white house administration. President Trump tried to handle this uncomnfortable situation blaming the media for the Spicer's resign. More information in the next article:

* From the New York times: [Sean Spicer Resigns as White House Press Secretary](https://www.nytimes.com/2017/07/21/us/politics/sean-spicer-resigns-as-white-house-press-secretary.html)

The last tweet come out one day after the breaking news from the Washington Post about Attorney General Jeff Sessions's meetings with the Russian ambassador during the 2016 presidential election. President Trump not only labeled all this story a Fake news, but he also mentioned his power of Pardon. A serious claim from president Trump, because here his main point was to explicitly let everyone know the power that he can use in this special case. Once again, we can notice that an uncomfortable situation for Trump led the president to protect himself using the "fake news" term to resize the seriousness of the problem. You can have in depth information in the following article: 

* From CNN. [Trump tweets mention his 'complete power' to pardon and bemoan 'leaks'](http://edition.cnn.com/2017/07/22/politics/trump-tweets-pardon-powers/index.html)


### Week 34 (from August 21, 2017 to August 27, 2017)

In the week 34 we found 5 matches:

| Matched tweets| 
| ------------- |
| 'Jerry Falwell of Liberty University was fantastic on @foxandfriends. The Fake News should listen to what he had to say. Thanks Jerry!'               |
|  'Thank you, the very dishonest Fake News Media is out of control! https://t.co/8J7y900VGK'                                                           |
|  "Last night in Phoenix I read the things from my statements on Charlottesville that the Fake News Media didn't cover fairly. People got it!"         |
|  'The Fake News is now complaining about my different types of back to back speeches. Well, their was Afghanistan (somber), the big Rally.....'       |
|  "General John Kelly is doing a fantastic job as Chief of Staff. There is tremendous spirit and talent in the W.H. Don't believe the Fake News"       |


#### Observations

In the first 4 tweets (expect for the Tweet about john Kelly) Trump tried to defend himself from all the critics received by the media and politicians for his statements regarding the Charlottesville tragedy. Mostly because in his first speech after the tragedy, Trump lacked in condemning directly the alt-right groups and for this reason he was accused from several sides. More specific, in the first tweet, Trump praised Jerry Falwell — a conservative evangelical leader, president of Liberty's university - for his support after Trump's speech about Charlottesville. In the fourth tweet, Trump tried to defend himself by saying that he uses different tones or mood for each specific speech. Once again, a difficult situation prompted him to over react and to undersize his mistakes by blaming again the "unfair" coverage of the media. If you want to have more information about these stories, check these links that we suggest you:

* from the New york Times: [Liberty University Alumni Return Diplomas in Protest of Trump Remarks](https://www.nytimes.com/2017/08/21/us/jerry-falwell-liberty-university-trump.html)

* from Bustle: [What Did Trump Say About Charlottesville In Phoenix? He Attacked "Fake News Media" On Twitter Again](https://www.bustle.com/p/what-did-trump-say-about-charlottesville-in-phoenix-he-attacked-fake-news-media-on-twitter-again-78464)

* from CNN. [Different speeches, different venues, but there's only one Donald Trump](http://edition.cnn.com/2017/08/24/politics/donald-trump-speeches-mood/index.html)

The last tweet is a response to the article published by the washington Post where it was reported that there were some misunderstandings and frictions between Trump and his new chief of staff, John Kelly. Again, a trouble in the white House administration reported to the public pushed president Trump to deny everything, suggesting to his followers not to believe the "Fake News" media. You can find the full story here:

* from Business Insider: [Trump fires back at report that says his friends 'fear' he's 'on an inevitable collision course' with his chief of staff](More info: http://www.businessinsider.com/trump-john-kelly-washington-post-2017-9)


### Week 40 (from October 2, 2017 to October 8, 2017)

This is the last week that we will show with our observations, we have 6 matched tweets:

| Matched tweets| 
| ------------- |
| 'Wow, so many Fake News stories today. No matter what I do or say, they will not write or speak truth. The Fake News Media is out of control!'         |
|  'NBC news is #FakeNews and more dishonest than even CNN. They are a disgrace to good reporting. No wonder their news ratings are way down!'           |
|  'The @NBCNews story has just been totally refuted by Sec. Tillerson and @VP Pence. It is #FakeNews. They should issue an apology to AMERICA!'         |
|  "RT @FoxNews: Geraldo Blasts 'Fake News' Reports About Trump's Visit to Puerto Rico https://t.co/9jO0D3BMvE"                                          |
|  "Why Isn't the Senate Intel Committee looking into the Fake News Networks in OUR country to see why so much of our news is just made up-FAKE!"        |
|  'Rex Tillerson never threatened to resign. This is Fake News put out by @NBCNews. Low news and reporting standards. No verification from me.'         |


#### Observations

Most of these tweets concern the claims and the article about the Secretary of State Rex Tillerson, namely that he thought about quitting his role and that he called the president "a moron", as reported in the following article of NBC news: [Tillerson’s Fury at Trump Required an Intervention From Pence](https://www.nbcnews.com/politics/white-house/tillerson-s-fury-trump-required-intervention-pence-n806451)

Trump reacted to these difficult situations, he denied all the claims saying that everything is fine with Tillerson and, as usual, he classified the media again as fake news because of this stories.


For clarity of our research, now we will show you the same analysis with the other two intervals: by month and by date.

### Analysis by month

The procedure is the same as we have done for the week interval, we grouped our tweets by month and we counted the number of matched tweets, in the next bar plot you can see the results obtained for each month:

<html>
<iframe id="igraph" scrolling="no" style="border:none;" seamless="seamless" src="https://plot.ly/~smith-erik/33.embed?link=false" height="525" width="100%"></iframe>
</html>

As you can see, after having divided by month it is clear that we had to restrict the period of time of the groupby in order to see if we can obtain clear peak in the term usage. In order to be sure of this observation, in our first analysis, we decided to make a research only for the tweets in the month of October 2017 that has the highest number of matches. After we did it, we had the confirmation that we had to restrict our interval because the tweets were related to several facts that were not linked each other.

### Analysis by date:

Again, we grouped the tweets of the presidency period by date this time, after this we counted the number of tweets with the "fake news" term used and we retrieved the first ten dates with the highest number of matched tweets:

| Date        | Number of matched tweets           |
| ------------- |:-------------:|
| 2017-09-30 | 8.0 |
| 2017-05-28 | 6.0 |
| 2017-08-07 | 5.0 |
| 2017-06-27 | 3.0 |
| 2017-10-21 | 3.0 |
| 2017-07-01 | 3.0 |
| 2017-10-11 | 3.0 |
| 2017-10-05 | 3.0 |
| 2017-10-04 | 3.0 |
| 2017-06-28 | 3.0 |

	
The first three dates took our attention, therefore we decide to search for some interesting correlation for these three days, but we noticed that in the date of 2017-05-28 we had two tweets repeated so we decided to not show here the observations on that date.

### Date 2017-08-07

Let us first show you the tweets that we have found:

| Matched tweets| 
| ------------- |
| 'The Fake News refuses to report the success of the first 6 months: S.C., surging economy &amp; jobs,border &amp; military security,ISIS &amp; MS-13 etc.'   |
|  'The Trump base is far bigger &amp;  stronger than ever before (despite some phony Fake News polling). Look at rallies in Penn, Iowa, Ohio.......'   |
|  '...and West Virginia. The fact is the Fake News Russian collusion story, record Stock Market, border security, military strength, jobs.....'   |
|  'Hard to believe that with 24/7 #Fake News on CNN, ABC, NBC, CBS, NYTIMES &amp; WAPO, the Trump base is getting stronger!'   |
|  "The Fake News Media will not talk about the importance of the United Nations Security Council's 15-0 vote in favor of sanctions on N. Korea!"   |


#### Observations

In this day, president trump attacked again the media after Deputy Attorney General Rod J. Rosenstein told that if the special consuel for the Russian sabotage of USA 2016 election finds evidence of crimes, the consuel can investigate them. This fact of course made some pressure for president Trump, who decided again to blame the media (this time accused of trying to weaken up the support for the president) in order to reassure his position and hide the main problem.

For more information you can check the next article:

* from Washington Post: [as Mueller closes in, Trump prepares his base for the worst](https://www.washingtonpost.com/blogs/plum-line/wp/2017/08/07/as-mueller-closes-in-trump-prepares-his-base-for-the-worst/?utm_term=.29b36bdeaae9)


### Date 2017-09-30

In this day we have the following matched tweets:


| Matched tweets| 
| ------------- |
| 'Fake News CNN and NBC are going out of their way to disparage our great First Responders as a way to "get Trump." Not fair to FR or effort!'        |
|  "The Fake News Networks are working overtime in Puerto Rico doing their best to take the spirit away from our soldiers and first R's. Shame!"        |
|  'Despite the Fake News Media in conjunction with the Dems, an amazing job is being done in Puerto Rico. Great people!'        |
|  'To the people of Puerto Rico:\nDo not believe the #FakeNews!       |
|  "@ricardorossello ......#FakeNews critics are working overtime, but we're getting great marks from the people that truly matter!        |
|  'Because of #FakeNews my people are not getting the credit they deserve for doing a great job. As seen here, they are ALL doing a GREAT JOB!       |
|  'In analyzing the Alabama Primary race, Fake News always fails to mention that the candidate I endorsed went up MANY points after Election!'        |
|  'In analyzing the Alabama Primary race,FAKE NEWS always fails to mention that the candidate I endorsed went up MANY points after endorsement!'        |


#### Observations

These tweets refer to the Puerto Rico situation during the disaster of the hurricane Maria. We have already covered this story when we discussed the results for the [39th week of the year](#Week-39th-(from-September-25,-2017-to-October-1,-2017)).



## Sentiment analysis on the tweets with the "fake news" term used

In this section we decided to analyze the tweets of the presidency period through the sentiment analysis we developed earlier. We have therefore added to our tweets all the scores obtained for the feelings considered (anger, anticipation, disgust, fear, joy, negative, positive, sadness, surprise, trust). After that, we split our tweets between matched (fake news term used) and not matched. Since the set of non-matched tweets contains more elements than matched tweets, for comparison we took a sample of non-matched tweets to get the same number of items. Finally, for both sets we computed the average of the values of the feelings obtaining the following results:

<html>
<iframe id="igraph" scrolling="no" style="border:none;" seamless="seamless" src="https://plot.ly/~smith-erik/41.embed?link=false" height="525" width="100%"></iframe>
</html>

Below, for clarity, we show that the values of the sample set follow the behavior of the values of the complete set of matched tweets:

<html>
<iframe id="igraph" scrolling="no" style="border:none;" seamless="seamless" src="https://plot.ly/~smith-erik/43.embed?link=false" height="525" width="100%"></iframe>
</html>

Finally, we computed the deltas of the mean values of the sentiments between the matched tweets set and the non matched tweets set (it is a simple subtraction between matched and non matched sets):


| Sentiment     | Delta Mean Value |
| ------------- |:-------------:|
| anger	        |   0.530303 |
| anticipation  |  -0.181818 |
| disgust	    |   0.575758 |
| fear	        |   0.136364 |
| joy	        |  -0.242424 |
| negative	    |   1.909091 |
| positive	    |  -0.560606 |
| sadness	    |   0.530303 |
| surprise	    |  -0.196970 |
| trust	        |  -0.477273 |


#### Observations

From this simple comparison, using the sentiment classification that we have created in the sentiment analysis paragraph, we can spot that the set of tweets containing the 'fake news' term follows a negative trend, namely, all the mean values of the sentiment labels that can be considered negative sentiments ( anger, disgust, fear, negative, sadness) have a greater value compared to the set of tweets without the 'fake news' term; and the sentiment labels that can be seen as positive or neutral sentiments (anticipation, joy, positive, surprise, trust) have a fewer value compared to the set of tweets that do not contain the 'fake news' term. 



## Washington Post dataset of debunked Trump's claims

By dealing with the issue of fake news, it is natural to ask how many times Trump has not been accurate in expressing facts and truths. Therefore, in our research, one of our goals was to understand if it was possible to find a source that had fact-checked some Trump statements. Our research was successful thanks to a [dataset prepared by the Washington Post](https://www.washingtonpost.com/graphics/politics/trump-claims-database/?utm_term=.e3895bf3f60d) in which Trump's untruthful statements during his presidency are analyzed and corrected. The statements were taken from various sources, mainly from interviews, press statements and tweets. So we got all the data from the site related to the tweets, then we decided to derive a word usage from the fact-checked tweets and the rest of his tweets during the presidency trying to find some interesting difference between these two groups of tweets.

Here are our results regarding word usage:
      
#### Fact Checked

![Word cloud from fact checked tweets.](/assets/fact_checked.png)


#### Not Checked

![Word cloud from not checked tweets.](/assets/not_checked.png)


*Fake News* appears in both categories, althogh relativly more in the fact checked tweets. The most noticable difference presence of *healthcare* in the fact checked tweets versus *foxandfriends* in the non-checked. Interestingly enough, *Russia* has the same relative use in both categories.


## Hillary Clinton Comparison


Here is a wordcloud from Hillary's word usage during the campaign.

![Wordcloud for Hillary Clinton during campaign.](/assets/hc_proof2.png)

There are some clear differences from Trump's wordclouds in the beginning of this post. She uses words like *women* and *families*, which are not visible in Trump's wordclouds. Hillary also uses *will* relatively less and *need* and *want* relatively more.

As a final comparison, we plot the number of tweets per week for 2016 and see if we can spot some differences.

<html>
<iframe id="igraph" scrolling="no" style="border:none;" seamless="seamless" src="https://plot.ly/~smith-erik/49.embed?link=false" height="525" width="100%"></iframe>
</html>

The spike in Hillary's tweets in week 38 arises due to the [Democratic National Convention](https://en.wikipedia.org/wiki/2016_Democratic_National_Convention) taking place that week. Interestingly, we do not see as large a spike in Trump's tweets during the [Republican National Convention](https://en.wikipedia.org/wiki/2016_Republican_National_Convention) which took place in week 29 of 2016.



