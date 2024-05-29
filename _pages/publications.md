---
layout: archive
title: "Research"
permalink: /research/
author_profile: true
---

{% if site.author.googlescholar %}
  <div class="wordwrap">You can also find my articles on <a href="{{site.author.googlescholar}}">my Google Scholar profile</a>.</div>
{% endif %}

{% include base_path %}

<h2> Published Works </h2>

{% for post in site.publications reversed %}
  {% include archive-single.html %}
{% endfor %}

<h2> Working Papers </h2>

{% for post in site.workingpapers reversed %}
  {% include archive-single.html %}
{% endfor %}
