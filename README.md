---
title: ADA Project
---

# A Project in Applied Data Analysis

Analysing Trump's tweets. Test

## Posts

<ul>
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a>
    </li>
  {% endfor %}
</ul>
