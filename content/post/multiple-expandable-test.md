---
title: "Prueba de expandibles seguidos"
date: 2020-06-17T22:01:14-05:00
tags: [issue]
---

Probando GitHub issue https://github.com/zwbetz-gh/cupper-hugo-theme/issues/36 -- Multiple expandable shortcodes do not work if they have the same inner text.

{{< expandable label="expandable 1" level="2" >}}
Un texto interior.
{{< /expandable >}}

{{< expandable label="expandable 2" level="2" >}}
Un texto interior.
{{< /expandable >}}

{{< expandable label="expandable 3" level="2" >}}
Diferente texto interior.
{{< /expandable >}}
