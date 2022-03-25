/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { useTranslation } from "react-i18next";
import { Form, Container, Alert } from "react-bootstrap";
import FeedList from "./FeedList";
import { GET_FEEDS } from "./GET_FEEDS";
import Spinner from "../../components/Spinner";
import useMetaTags from "../../hooks/useMetaTags";
import useScrollPosition from "../../hooks/useScrollPosition";
import { GetFeedResponse } from "../../@types/feeds";

const Home = () => {
  const [limit, setLimit] = useState(4);
  const [language, setLanguage] = useState("en");
  const [feed, setFeed] = useState({} as GetFeedResponse);

  const { i18n } = useTranslation();
  const scrollPosition = useScrollPosition();
  const setTags = useMetaTags();

  // GraphQL API
  const {
    loading,
    error,
    data,
  } = useQuery(GET_FEEDS, {
    variables: { limit: limit, offset: 2 },
  });

  // Lazy loading
  useEffect(() => {
    if (
      !loading &&
      feed.hasNextPage &&
      scrollPosition >= window.document.body.offsetHeight
    ) {
      setLimit((prev) => prev + 4);
    }
  }, [scrollPosition]);

  // Set state and Meta Tags
  useEffect(() => {
    if (data) {
      setFeed(data.getFeed);
      const lastFeed = data.getFeed.items.slice(-1)[0];
      setTags(lastFeed);
    }
  }, [data]);

  // Change Language
  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language]);

  if (loading && limit <= 4) return <Spinner />;
  if (error) return <Alert variant="danger">{error}</Alert>;

  return (
    <div className="feed-section">
      <Container>
        <Form className="my-5 language-select">
          <Form.Check
            type="radio"
            id="english"
            name="language"
            value="en"
            className="btn-check"
            checked={language === "en"}
            onChange={(e) => setLanguage(e.target.value)}
          />

          <Form.Label
            className={`btn ${language === "en" ? "btn-active" : "btn-inactive"
              }`}
            htmlFor="english"
          >
            English
          </Form.Label>

          <Form.Check
            type="radio"
            id="spanish"
            name="language"
            value="es"
            className="btn-check"
            checked={language === "es"}
            onChange={(e) => setLanguage(e.target.value)}
          />

          <Form.Label
            className={`btn ${language === "es" ? "btn-active" : "btn-inactive"
              }`}
            htmlFor="spanish"
          >
            Spanish
          </Form.Label>
        </Form>

        <FeedList feeds={feed.items} />
        {loading && <Spinner size={50} />}
      </Container>
    </div>
  );
};

export default Home;
