import React from "react";
import Image from "next/image";
const SunSet = () => {
  return (
    <div>
      <div className="main-container px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20">
          <div className="mb-10 md:mb-0">
            <Image
              src="/images/aa.png"
              alt=""
              className=""
              width="662"
              height="662"
            />
          </div>
          <div>
            <div>
              <h2 className="sunset-text lg:mt-5">Title: Sunset</h2>
              <h2 className="sunset-text">Created By: discordname#8500</h2>
              <h2 className="sunset-text">TwiterLink: discordname#8500</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                mollitia, molestiae quas vel sint commodi repudiandae
                consequuntur voluptatum laborum numquam blanditiis harum
                quisquam eius sed odit fugiat iusto fuga praesentium optio,
                eaque rerum! Provident similique accusantium nemo autem.
                Veritatis obcaecati tenetur iure eius earum ut molestias
                architecto voluptate aliquam nihil
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                mollitia, molestiae quas vel sint commodi repudiandae
                consequuntur voluptatum laborum numquam blanditiis harum
                quisquam eius sed odit fugiat iusto fuga praesentium optio,
                eaque rerum! Provident similique accusantium nemo autem.
                Veritatis obcaecati tenetur iure eius earum ut molestias
                architecto voluptate aliquam nihil
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SunSet;
