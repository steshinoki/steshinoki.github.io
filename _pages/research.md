---
title: 
layout: single
classes: wide
permalink: /research/
author_profile: true
---

{% if site.author.googlescholar %}
  <div class="wordwrap">You can also find my articles on <a href="{{site.author.googlescholar}}">my Google Scholar profile</a>.</div>
{% endif %}

{% include base_path %}

<!--
<h2> Published Papers </h2> 

{% for post in site.publications reversed %}
  {% include archive-single.html %}
{% endfor %}

-->

# <center> Working Papers </center>
- - -

**Difference-in-Discontinuities: Estimation, Inference and Validity Tests**, joint with <a href="https://sites.google.com/view/pedropicchetti/home" style="text-decoration:none">Pedro Picchetti</a> and <a href="https://sites.google.com/site/cristinepinto/" style="text-decoration:none">Cristine Campos de Xavier Pinto</a>. 2024. (Submitted)<br/> 
<small>[<a href="#" onclick="visib('DiDC_abs')">Abstract</a> | [arXiv WP][DiDC_arXiv]] </small>

<div id="DiDC_abs" style="display: none; text-align: justify; line-height: 1.2" ><small>
This paper provides a formal econometric framework behind the newly developed difference-in-discontinuities design (DiDC). Despite its increasing use in applied research, there are currently limited studies of its properties. We formalize the theory behind the difference-in-discontinuity approach by stating the identification assumptions, proposing a nonparametric estimator, and deriving its asymptotic properties. We also provide comprehensive tests for one of the identification assumption of the DiDC and sensitivity analysis methods that allow researchers to evaluate the robustness of DiDC estimates under violations of the identifying assumptions. Monte Carlo simulation studies show that the estimators have desirable finite-sample properties. Finally, we revisit Grembi et al. (2016), which studies the effects of relaxing fiscal rules on public finance outcomes. Our results show that most of the qualitative takeaways of the original work are robust to time-varying confounding effects.
</small><br><br/></div>

[DiDC_arXiv]: https://arxiv.org/abs/2405.18531v2




[//]: This java script is the button to show abstract
<script>
 function visib(id) {
  var x = document.getElementById(id);
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
</script>

[//]:&emsp;<button onclick="visib('polariz')" class="btn btn--inverse btn--small">Abstract</button>
