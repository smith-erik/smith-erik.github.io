---
layout: default
---

# A Project in Applied Data Analysis

Analysing Trump's tweets. Test 123456.

## Posts

<ul>
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a>
    </li>
  {% endfor %}
</ul>
