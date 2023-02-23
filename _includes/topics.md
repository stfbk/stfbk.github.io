{% assign sorted_topics = site.topics | where: "type", "topic" | sort: "order" %}

<div class="columns is-multiline">
    {% for topic in sorted_topics %}
    <div class="column is-4-desktop is-6-tablet">
        <a href="{{ topic.url | prepend: site.baseurl }}">
            <div class="card topic">
                {% if topic.image %}
                <div class="card-image">
                    <figure class="image">
                        <img src="{{ site.baseurl }}/assets/areas/topics/{{ topic.image }}" alt="{{ topic.title }}" width="640px" height="480px" />
                    </figure>
                </div>
                {% endif %}
                <div class="card-content">
                    <p class="title is-4">{{ topic.title }}</p>
                    <p class="subtitle is-4">{{ topic.subtitle }}</p>
                </div>
            </div>
        </a>
    </div>
    {% endfor %}
</div>