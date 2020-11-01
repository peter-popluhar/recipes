<style type="text/scss">
    @import './media-box.scss';
</style>

<script>
    import { Client, linkResolver } from "../../../prismic-config.js";
    import PrismicDOM from "prismic-dom";
    export let data;

    const { title, image, category } = data.data;
</script>


<a rel="prefetch" href={linkResolver(data)}>
    <img src={image.url} alt={PrismicDOM.RichText.asText(title)} />
    <div>
        <span class="text--xs">{category}</span>
        <h3>{PrismicDOM.RichText.asText(title)}</h3>
    </div>
</a>