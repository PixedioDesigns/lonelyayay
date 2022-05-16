import React from "react";
import Image from "next/image";
import Link from "next/link";
const MakePost = () => {
  return (
    <div>
      <div className="main-container make-post-spacing relative">
        <Link href="/">
          <div className="md:absolute flex items-center gap-x-12 cursor-pointer">
            <img src="/images/126.png" alt="" className="" />
            <p className="text-2xl">Back</p>
          </div>
        </Link>
        <div className="flex flex-col justify-center items-center">
          <div>
            <h1 className="text-[65px] 2xl:mb-[134px] xl:mb-24 lg:mb-16 mb-12">
              Make a Post{" "}
            </h1>
            <div>
              <form>
                <div>
                  <lable className="make-input-title">Title</lable>
                  <br />
                  <input type="text" className="input-post" />
                </div>
                <div>
                  <lable className="make-input-title">Discord Name</lable>
                  <br />
                  <input type="text" className="input-post" />
                </div>
                <div>
                  <lable className="make-input-title">Twitter Link</lable>
                  <br />
                  <input type="text" className="input-post" />
                </div>
                <div>
                  <lable className="make-input-title">Description</lable>
                  <textarea
                    id="txtArea"
                    className="input-message-2 mt-2 rounded-md focus:rounded-md"
                    rows="8"
                  ></textarea>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <div className=" file-input min-w-[400px]">
                    <Image
                      src="/images/Group.png"
                      alt=""
                      className=""
                      width="27"
                      height="35"
                    />
                    <div className="pl-5 pt-5">
                      <input type="file" name="file_upload" className="" />
                    </div>
                  </div>

                  <label className="make-input-title mt-[30px]">
                    Design File{" "}
                  </label>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MakePost;
