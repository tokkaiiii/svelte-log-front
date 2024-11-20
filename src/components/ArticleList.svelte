<script>
    import {onMount} from "svelte";
    import {articles, currentArticlesPage, loadingArticle, articlePageLock} from "../stores/index.js";
    import Article from "./Article.svelte";
    import ArticleLoading from "./ArticleLoading.svelte";

    let component
    let element

    // 이렇게 하면 페이지가 처음 열리면 articles 를 초기화 하고 첫번째 페이지에 해당하는 내용을 불러오게 된다
    onMount(() => {
        articles.resetArticles()
        articles.fetchArticles()
    })

    // 반응형 기호로 만든 이유 : 스크롤 할 때 그리고 브라우저 크기가 변경될 때마다 돔의 높이 정보, 스크롤 위치 등의 정보가 변경되기 때문
    $: {
        if (component) {
            // list 가 나오는 부모 dom 의 정보를 알아야 한다
            element = component.parentNode
            element.addEventListener('scroll', onScroll)
            element.addEventListener('resize', onScroll)
        }
    }

    const onScroll = (e) => {
        const scrollHeight = e.target.scrollHeight // 브라우저에서 스크롤 높이
        const clientHeight = e.target.clientHeight // 화면 높이
        const scrollTop = e.target.scrollTop // 현재 스크롤 위치
        const realHeight = scrollHeight - clientHeight // 실제 스크롤 사이즈
        const triggerHeight = realHeight * 0.7 // 화면의 70% 에 해당하는 즉 다음페이지가 호출되는 스크롤 위치

        const triggerComputed = () => {
            return scrollTop > triggerHeight
        }

        //현재 페이지가 전체페이지보다 작거나 같으면 true 리턴
        const countCheck = () => {
            const check = $articles.totalPageCount <= $currentArticlesPage
            return check
        }

        if (countCheck()) {
            articlePageLock.set(true)
        }

        const scrollTrigger = () => {
            return triggerComputed() && !countCheck() && !$articlePageLock
        }

        if (scrollTrigger()) {
            currentArticlesPage.increPage()
        }
    }
</script>
<!-- slog-list-wrap start-->
<!-- this 의 의미는 자신 즉, slog-list-wrap 돔의 정보를 component 에 바인딩한다는 것-->
<div class="slog-list-wrap" bind:this={component}>
    <ul class="slog-ul">
        {#each $articles.articleList as article, index}
            <li class="mb-5">
                <Article {article}/>
            </li>
        {/each}
    </ul>
    {#if $loadingArticle}
        <ArticleLoading/>
    {/if}
</div><!-- slog-list-wrap end-->