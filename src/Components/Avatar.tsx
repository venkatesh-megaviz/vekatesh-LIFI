import {  Box, Button, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
// @ts-ignore
import "swiper/css";
// @ts-ignore
import "swiper/css/navigation";
import { useMainStyles } from "../Styles/HomeStyle";
import { useAvatarStyles } from "../Styles/AvatarStyle";
import leftPlay from "../assets/leftplay.png";
import rightSideplay from "../assets/rightsideplay.png";
import Biglogo from "../Utilities/Biglogo";
import { chipsData, avatarImages } from "../Utilities/ImagesDb"
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../redux/store/store";
import {  UpdateProfile } from "../redux/reducers/auth";
import { showToast } from "../Utilities/Toast";
import CircularLoader from "../Utilities/CircularLoader";

const Avatar = () => {
  const { loading } = useSelector((state: RootState) => state.auth)
  const { classes: mainClasses } = useMainStyles({pathname:location.pathname});
  const { classes: avatarClasses } = useAvatarStyles();
  const [paused] = useState(false);
  const [state, setState] = useState<{ planet?: String, avatar?: string, gender?: string }>({ planet: '', avatar: '', gender: '' })
  const[value,setValue]=useState(false)
  const[planet,setPlanet]=useState<String | null>(null)
  const dispatch = useDispatch<AppDispatch>()
  const handleSelectAvatar = (x: { id?: string, gender?: string }) => {
    setValue((prev) => !prev); 
    setState((prev) => ({ ...prev, avatar: x.id?.toString(), gender: x.gender }))

  }
  const hanldeSubmit = async () => {
    const data = {
      gender: state.gender,
      planet: state.planet,
      avatar: state.avatar
    }
    const response = await dispatch(UpdateProfile({ data: data }))
    const fullfilled = response.payload
   
    if (fullfilled.status) {
      setValue(false)
      setPlanet(null)
      showToast(true, fullfilled.message)
    }
    else {
      showToast(false, fullfilled.message)
    }

  }
 const handleChips=(chip:{id:number,chip:string})=>{
  setState((prev) => ({ ...prev, planet: chip.chip })); 
  setPlanet(chip.chip)
 }
  return (
    <Box className={mainClasses.homeStyleContainer}>
      {planet!==null&&<></>}
      {loading && <CircularLoader />}
      <Button  className={avatarClasses.avatartButton}>
        CHOOSE YOUR AVATAR
      </Button>
      {value ? '': ''}
      <Box display="flex" justifyContent="center">
        <Biglogo />
      </Box>

      {/* Avatar Swiper */}
      <Box
        sx={{
          width: "100%",
          maxWidth: 800,
          mx: "auto",
          position: "relative",
          mb: 6,
          height: { md: 320, xs: 180 },
          display: "flex",
          alignItems: "center",
          justifyContent: 'center'
        }}
      >
        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          loop
          centeredSlides
          onSlideChange={(swiper) => {
            const current = avatarImages[swiper.realIndex];
            if (current) {
              handleSelectAvatar(current);
            }
          }}
          breakpoints={{
            0: { // mobile
              slidesPerView: 3,
              spaceBetween: 1,
              centeredSlides: true,
            },
            600: { // tablets
              slidesPerView: 2.5,
              spaceBetween: 30,
              slidesOffsetBefore: 30,
              slidesOffsetAfter: 30,
            },
            900: { // desktops
              slidesPerView: 3,
              spaceBetween: 50,
              slidesOffsetBefore: 60,
              slidesOffsetAfter: 60,
            },

          }}
          style={{ height: "100%" }}
        >
          {avatarImages.map((x: { id?: string, img?: string }) => (
            <SwiperSlide

              key={x.id}>
              {({ isActive }) => (
                <Box
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  sx={{
                    height: { md: 300, xs: 160 },   // fixed slide height
                  }}
                >
                  <Box
                    component="img"
                    src={x.img}
                    onClick={()=>handleSelectAvatar(x)}
                    alt={`Avatar-${x.id}`}
                    sx={{
                      maxHeight: isActive ? { md: 280, xs: 150 } : { md: 180, xs: 100 },
                      maxWidth: isActive ? { md: 200, xs: 100 } : { md: 120, xs: 60 },
                      opacity: isActive ? 1 : 0.6,
                      transform: isActive ? "scale(1)" : "scale(0.8)",
                      transition: "all 0.3s ease",
                      objectFit: "contain",
                      marginRight: { md: "100px" }
                    }}
                  />
                </Box>
              )}
            </SwiperSlide>
          ))}
        </Swiper>


        {/* Custom Navigation Buttons INSIDE same container */}
        <Box
          className="custom-prev"
          sx={{
            position: "absolute",
            left: { md: -50, xs: 5 },
            top: "50%",
            transform: "translateY(-50%)",
            cursor: "pointer",
            zIndex: 10,
          }}
        >
          <Box
            component="img"
            src={leftPlay}
            alt='left play'
            sx={{ width: { md: 65, xs: 35 }, height: { md: 65, xs: 35 } }}
          />
        </Box>

        <Box
          className="custom-next"
          sx={{
            position: "absolute",
            right: { md: -50, xs: 5 },
            top: "50%",
            transform: "translateY(-50%)",
            cursor: "pointer",
            zIndex: 10,
          }}
        >
          <Box
            component="img"
            src={rightSideplay}
            alt='rifht play'
            sx={{ width: { md: 65, xs: 35 }, height: { md: 65, xs: 35 } }}
          />
        </Box>
      </Box>

      {/* Avatar swiper end */}
      {/* Chip Title */}
      <Box mt={4} textAlign="center">
        <Button  className={avatarClasses.choosechipButton}>
          CHOOSE YOUR CHIP
        </Button>
      </Box>

      {/* Chip Marquee Scroll */}
      <Box className={avatarClasses.chipsMarqueeWrapper}>
        <Box 
          className={avatarClasses.chipsMarqueeContent}
          style={{ animationPlayState: paused ? "paused" : "running" }}
          onMouseEnter={(e) => (e.currentTarget.style.animationPlayState = "paused")}
          onMouseLeave={(e) => {
            if (!paused) e.currentTarget.style.animationPlayState = "running";
          }}
          onTouchStart={(e) => (e.currentTarget.style.animationPlayState = "paused")}
          onTouchEnd={(e) => {
            if (!paused) e.currentTarget.style.animationPlayState = "running";
          }}
        >
          {[...chipsData, ...chipsData].map((chip, i) => (
            <Box
              key={i}
              className={avatarClasses.chipsInnerBox}
              onClick={() => handleChips(chip)}
              sx={{
                cursor: 'pointer',
                position: 'relative',
                overflow: 'hidden',
                borderRadius: '90%',
               
               
              }}
            >
              <Box
                component="img"
                src={chip.imgchip}
          
                className={avatarClasses.chipimage}
                sx={{
          
                  boxShadow: state.planet === chip.chip ?'inset 0 10px 10px 80px black':'',
                 
                }}
              />
              <Typography
                className={avatarClasses.chipsLabel}
                color="#156082"
                align="center"
              >
                {chip.chip}
              </Typography>
            </Box>
          ))}
          
        </Box>
        
      </Box>

      {/* Save Button */}
      <Button variant="contained" className={avatarClasses.saveAvatorchip} onClick={hanldeSubmit} disabled={loading}>
        {loading ? 'Save...' : 'Save'}
      </Button>
    </Box>
  );
};

export default Avatar;
