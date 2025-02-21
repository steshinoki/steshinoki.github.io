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

**Difference-in-Discontinuities: Estimation, Inference and Validity Tests**, joint with <a href="https://sites.google.com/view/pedropicchetti/home" style="text-decoration:none">Pedro Picchetti</a> and <a href="https://sites.google.com/site/cristinepinto/" style="text-decoration:none">Cristine Campos de Xavier Pinto</a>. 2024. <br/> 
<small>[<a href="#" onclick="visib('DiDC_abs')">Abstract</a> | [SSRN WP][DiDC_SSRN]] </small>

<div id="DiDC_abs" style="display: none; text-align: justify; line-height: 1.2" ><small>
This paper investigates the econometric theory behind the newly developed difference-in-discontinuities design (DiDC). Despite its increasing use in applied research, there are currently limited studies of its properties. The method combines elements of regression discontinuity (RDD) and difference-in-differences (DiD) designs, allowing researchers to eliminate the effects of potential confounders at the discontinuity. We formalize the difference-in-discontinuity theory by stating the identification assumptions and proposing a nonparametric estimator, deriving its asymptotic properties and examining the scenarios in which the DiDC has desirable bias properties when compared to the standard RDD. We also provide comprehensive tests for one of the identification assumption of the DiDC. Monte Carlo simulation studies show that the estimators have good performance in finite samples. Finally, we revisit Grembi et al. (2016), that studies the effects of relaxing fiscal rules on public financial outcomes in Italian municipalities. The results show that the proposed estimator exhibits substantially smaller confidence intervals for the estimated effects.
</small><br><br/></div>

[DiDC_SSRN]: https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4846141




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