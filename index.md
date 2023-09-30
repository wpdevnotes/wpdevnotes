---
title: Welcome to My Blog!
layout: default
---

<div class="">
  <img 
    class="w-56 h-56 rounded-full object-cover border border-[16px] border-stone-700 border-solid -ml-4"
    src="/assets/img/marko.jpg" 
    alt="Marko Krstic"
    >
  <div>

    <h2>About</h2>
    
    <p>For the past 23 years, I have been a hands-on and adaptable problem solver, collaborating with start-ups, e-commerce businesses, agencies, and consulting firms.</p>
    
    <p>I have created this to have my personal notes what I have learned and what can came out handy from time to time, and wanted to share with with the world as if it can help someone alse even better!</p>
    
    <p>I also building plugins so visit <a href="https://dplugins.com/" target="_blank">DPlugins for more info</a>.</p>

  </div>
</div>


<ul>
  {% for post in site.posts %}
    <li>      
      <h3><a href="{{ post.url }}">{{ post.title }}</a></h3>
    </li>
  {% endfor %}
</ul>