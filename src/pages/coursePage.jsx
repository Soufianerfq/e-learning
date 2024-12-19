import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import VideoThumbnail from "../components/coursePageComponents/videoThumbnail";
import CoursePart from "../components/coursePageComponents/coursepart";
import VideoPlayer from "../components/coursePageComponents/videoPlayer";
import { useParams, useSearchParams } from "react-router-dom";
import { useMemo } from "react";
import courses from "../data/data";

const CoursePage = function () {
  const { Title } = useParams();
  const [searchParams] = useSearchParams();
  const [LessonsearchParams] = useSearchParams();

  const part = useMemo(
    () => searchParams.get("part"),
    [searchParams, searchParams?.get("part")]
  );
  const lesson = useMemo(
    () => LessonsearchParams.get("lesson"),
    [LessonsearchParams, LessonsearchParams?.get("lesson")]
  );

  const course = courses.find((obj) => obj.id === Title);
  let videos = "";

  if (part === null) {
    videos = course.Parts[0].lessons;
  } else {
    videos = course.Parts.find((obj) => obj.id === part)?.lessons;
  }

  return (
    <>
      <header className="w-screen h-[10vh] pt-[20px]">
        <Header />
      </header>
      <section id="video&resources" className="flex h-[50vh] w-screen  m-2">
        <div
          id="videoPlayer"
          className="h-full w-[80%] shadow-[0px_0px_10px_0px_rgba(0,_0,_0,_0.1)] m-2"
        >
          <VideoPlayer />
        </div>
        <div
          id="lessonResources"
          className=" overflow-auto h-full w-[20%] shadow-[0px_0px_10px_0px_rgba(0,_0,_0,_0.1)] m-2"
        >
          {videos.map((obj) => {
            return <VideoThumbnail {...obj} />;
          })}
        </div>
      </section>
      <section
        id="courseResorces"
        className=" flex flex-col items-center pt-7 pb-5 "
      >
        {course.Parts.map((obj) => {
          return <CoursePart {...obj} />;
        })}
      </section>
      <section id="reviews" className="flex h-[100vh] w-screen"></section>
      <footer className="w-screen h-[30vh]">
        <Footer />
      </footer>
    </>
  );
};

export default CoursePage;
