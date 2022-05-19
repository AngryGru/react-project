import React from "react";
import { Route, BrowserRouter, Routes, Navigate } from "react-router-dom";
import PageHeader from "../../components/PageHeader";
import Posts from "../Posts";
import Post from "../Post";
import Information from "../Information";
import Authorization from "../Authorization";
import Confirmation from "../Confirmation";
import AddPostForm from "../AddPostForm";

const Router = () => {
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  return (
    <BrowserRouter>
      {isLoggedIn ? (
        <Routes>
          <Route path={"/"} element={<PageHeader />}>
            <Route path="cards-list" element={<Posts />} />
            <Route path="cards-list/:id" element={<Post />} />
            <Route path="info" element={<Information />} />
            <Route path="add-post" element={<AddPostForm />} />
          </Route>
          <Route path="*" element={<Navigate to={"/"} replace />} />
        </Routes>
      ) : (
        <Routes>
          <Route path={"/auth"} element={<Authorization />}></Route>
          <Route path={"/confirm"} element={<Confirmation />}></Route>
          <Route path="*" element={<Navigate to={"/auth"} replace />} />
        </Routes>
      )}
    </BrowserRouter>
  );
};

export default Router;
