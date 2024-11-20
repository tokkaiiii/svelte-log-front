import { writable, get } from "svelte/store";
import { getApi, putApi, postApi, delApi } from "../service/api.js";
import { router } from "tinro";

// 1. 정의함수 만들기
// 게시글 스크롤시 페이지가 증가되는 부분
function setCurrentArticlesPage() {}

// 서비스의 가장 메인, 게시글 목록이 쌓이고 게시물 수정 삭제 등과 관련된 사용자 정의 메소드와
// 좋아요나 커멘트를 추가 했을 때 상태를 변경해주는 사용자정의 메소드 등을 가지게 됩니다
function setArticles() {}

// 게시물이 불러와 질 때 서버와의 통신중이라면 로딩상태를 표시하는 기능을 하는 스토어
function setLoadingArticle() {}

// 목록 형태의 여러 게시물이 아닌 게시물 하나의 정보만을 담을 스토어
function setArticleContent() {}

// 특정 게시물의 코멘트를 담을 스토어, 추가 수정 삭제 등을 처리하는 사용자 정의 메소드
function setComments() {}

// 로그인된 유저의 유저정보(_id, email) 를 담는 스토어, 로그인, 로그아웃, 회원가입 등의 사용자 정의 메소드를 가짐
function setAuth() {}

// 보기의 상태는 나타내는 스토어
// 모두 보기, 좋아요 보기, 내글보기
function setArticlesMode() {}

// 로그인 상태 파악 스토어
function setIsLogin() {}

// 스토어에 정의함수 매칭 시키기
export const currentArticlesPage = setCurrentArticlesPage()
export const articles = setArticles()
export const loadingArticle = setLoadingArticle()
export const articleContent = setArticleContent()
export const comments = setComments()
export const auth = setAuth()
export const articlesMode = setArticlesMode()
export const isLogin = setIsLogin()





