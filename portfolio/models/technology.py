from django.db import models

COLORS = (
    ("Slate", "SLATE"),
    ("Gray", "GRAY"),
    ("Zinc", "ZINC"),
    ("Neutral", "NEUTRAL"),
    ("Stone", "STONE"),
    ("Red", "RED"),
    ("Orange", "ORANGE"),
    ("Amber", "AMBER"),
    ("Yellow", "YELLOW"),
    ("Lime", "LIME"),
    ("Green", "GREEN"),
    ("Emerald", "EMERALD"),
    ("Teal", "TEAL"),
    ("Cyan", "CYAN"),
    ("Sky", "SKY"),
    ("Blue", "BLUE"),
    ("Indigo", "INDIGO"),
    ("Violet", "VIOLET"),
    ("Purple", "PURPLE"),
    ("Fuchsia", "FUCHSIA"),
    ("Pink", "PINK"),
    ("Rose", "ROSE"),
)

TYPES = (
    ("Css", "CSS"),
    ("Html", "HTML"),
    ("Bootstrap", "BOOTSTRAP"),
    ("Python", "PYTHON"),
    ("Django", "DJANGO"),
    ("JavaScript", "JAVASCRIPT"),
    ("React.js", "REACT.JS"),
    ("TypeScript", "TYPESCRIPT"),
    ("Tailwind.css", "TAILWIND.CSS"),
    ("Blog", "BLOG"),
    ("Astro.js", "ASTRO.JS"),
)


class Technology(models.Model):
    name = models.CharField(choices=TYPES, max_length=55)
    color = models.CharField(choices=COLORS, max_length=55)
    # logo = models.URLField(blank=True, max_length=255)

    def __str__(self):
        return f"{self.name}"
