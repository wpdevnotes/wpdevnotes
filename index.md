---
title: Welcome to My Blog!
layout: default
---

<h2>About</h2>

<p>For the past 23 years, I have been a hands-on and adaptable problem solver, collaborating with start-ups, e-commerce businesses, agencies, and consulting firms.</p>

<p>I have created this to have my personal notes what I have learned and what can came out handy from time to time, and wanted to share with with the world as if it can help someone alse even better!</p>

<p>I also building plugins so visit <a href="https://dplugins.com/" target="_blank">DPlugins for more info</a>.</p>


<ul>
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a>
    </li>
  {% endfor %}
</ul>