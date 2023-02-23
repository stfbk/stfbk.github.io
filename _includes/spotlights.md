{% assign spotlights = site.topics | where: "type", "spotlight" | sort: "order" %}

<div class="columns is-multiline">
    {% for spotlight in spotlights %}
    <div class="column is-4-desktop is-6-tablet">
        <a href="{{ spotlight.url | prepend: site.baseurl }}">
            <div class="card spotlight">
                {% if spotlight.image %}
                <div class="card-image">
                    <figure class="image">
                        <img src="{{ site.baseurl }}/assets/areas/topics/{{ spotlight.image }}" alt="{{ spotlight.title }}" width="640px" height="480px" />
                    </figure>
                </div>
                {% endif %}
                <div class="card-content">
                    <p class="title is-4">{{ spotlight.title }}</p>
                    <p class="subtitle is-4">{{ spotlight.subtitle }}</p>
                </div>
            </div>
        </a>
    </div>
    {% endfor %}
</div>