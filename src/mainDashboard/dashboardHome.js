import React from "react";
import { Box, Typography } from "@mui/material";
import TopSection from "../components/common/topSection";
import RightBox from "../components/common/rightBox";
import { mainDashboardRightColmData, mainDashboardTopBox } from "../dummyData";
import TotalTicketsIcon from "../assets/icons/Total_tickets_icon.svg";
import ReactApexChart from "react-apexcharts";
import TopBox from "../components/common/topBox";

const DashboardHome = () => {
  const value = ["Create Order", "+ Add Customer", " + Add Service Provider"];
  const colors = [
    "#165DC9",
    "#FF847C",
    "#48CFAF",
    "#FFB5B1",
    "#FFDC7E",
    "rgba(114, 35, 145, 1)",
  ];

  const options1 = {
    chart: {
      height: 280,
      type: "radialBar",
    },
    series: [70],
    colors: ["#4A3AFF"],
    plotOptions: {
      radialBar: {
        hollow: {
          size: "65%",
        },
        startAngle: -135,
        endAngle: 135,
        track: {
          background: "#FBBC05",
          startAngle: -135,
          endAngle: 135,
        },
        dataLabels: {
          name: {
            show: false,
          },
          value: {
            fontSize: "10px",
            show: true,
            formatter: function () {
              return "";
            },
          },
        },
      },
    },
    stroke: {
      lineCap: "round",
    },
    labels: ["Progress"],
  };

  const optionSectorPerformance = {
    series: [
      {
        data: [30, 80, 60, 70, 40, 50],
      },
    ],
    chart: {
      toolbar: {
        show: false,
      },
      height: 300,
      type: "bar",
    },
    colors: colors,
    plotOptions: {
      bar: {
        columnWidth: "45%",
        distributed: true,
        borderRadius: 5,
        borderRadiusApplication: "end",
        borderRadiusWhenStacked: "all",
        endingShape: "rounded",
      },
    },
    fill: {
      type: ["solid", "solid", "gradient", "gradient", "gradient", "solid"], // Solid for some, gradient for others
      gradient: {
        shade: "light",
        type: "vertical",
        shadeIntensity: 0.25,
        gradientToColors: ["#41C1C9", "#CD7ED9", "#FFCF50"], // Gradients for specific bars
        inverseColors: false,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 100],
      },
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    xaxis: {
      categories: ["", "", "", "", "", ""],
      labels: {
        show: false,
      },
    },
    yaxis: {
      labels: {
        formatter: function (value) {
          return Math.round(value);
        },
        style: {
          fontSize: "12px",
        },
      },
      tickAmount: 6,
      min: 0,
      max: 80,
    },
    grid: {
      show: true,
      borderColor: "#e0e0e0",
      position: "back",
      yaxis: {
        lines: {
          show: true,
          style: "solid",
          strokeWidth: 1,
        },
      },
      strokeDashArray: [5, 5],
    },
  };

  return (
    <Box
      sx={{
        pl: { sm: "40px" },
        pr: "20px",
        ml: "70px",
        mt: { xs: "140px", sm: "100px" },
        mb: "10px",
      }}
    >
      <TopSection value={value} />
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          mt: "15px",
        }}
      >
        <Box sx={{ width: { xs: "100%", md: "73%" } }}>
          <Box sx={{ display: "flex", gap: 1.5 }}>
            {mainDashboardTopBox?.map((value, index) => (
              <TopBox value={value} />
            ))}
          </Box>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "space-between",
              mt: "15px",
            }}
          >
            <Box
              sx={{
                backgroundColor: "#FFFFFF",
                borderRadius: "10px",
                px: "30px",
                minHeight: "400px",
              }}
            >
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Typography
                  sx={{
                    fontWeight: 600,
                    fontSize: { xs: "18px", md: "20px" },
                    pt: "30px",
                  }}
                >
                  Total Orders
                </Typography>
              </Box>
              <Box
                sx={{
                  position: "relative",
                  display: "inline-block",
                  width: 220,
                  height: 180,
                }}
              >
                <ReactApexChart
                  options={options1}
                  series={options1.series}
                  type="radialBar"
                  height={280}
                />

                <Box
                  sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    textAlign: "center",
                  }}
                >
                  <Typography sx={{ fontSize: "12px", color: "#615E83" }}>
                    Total Order
                  </Typography>
                  <Typography sx={{ fontWeight: 600, color: "#1E1B39" }}>
                    XX,XXX
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ display: "flex", gap: 2, ml: "50px", mt: "8px" }}>
                <Box>
                  <Box
                    sx={{
                      width: "20px",
                      backgroundColor: "#E5E6FF",
                      borderRadius: "50px",
                      overflow: "hidden",
                      mt: "10px",
                    }}
                  >
                    <Box
                      sx={{
                        width: "100%",
                        backgroundColor: "#4A3AFF",
                        height: "5px",
                      }}
                    />
                  </Box>
                </Box>
                <Box>
                  <Typography sx={{ fontSize: "12px", color: "#615E83" }}>
                    Active Orders
                  </Typography>
                  <Typography sx={{ fontWeight: 700 }}>x,xxx,xxx</Typography>
                </Box>
              </Box>
              <Box sx={{ display: "flex", gap: 2, ml: "50px", mt: "8px" }}>
                <Box>
                  <Box
                    sx={{
                      width: "20px",
                      borderRadius: "50px",
                      overflow: "hidden",
                      mt: "10px",
                    }}
                  >
                    <Box
                      sx={{
                        width: "100%",
                        backgroundColor: "#FBBC05",
                        height: "5px",
                      }}
                    />
                  </Box>
                </Box>
                <Box>
                  <Typography sx={{ fontSize: "12px", color: "#615E83" }}>
                    Completed Orders
                  </Typography>
                  <Typography sx={{ fontWeight: 700 }}>x,xxx,xxx</Typography>
                </Box>
              </Box>
            </Box>
            <Box
              sx={{
                backgroundColor: "#FFFFFF",
                borderRadius: "10px",
                px: "20px",
                width: { xs: "80%", sm: "50%", md: "70%" },
                mt: { xs: "5px", sm: "0px" },
                minHeight: "400px",
              }}
            >
              <Typography
                sx={{ fontWeight: "600", fontSize: "20px", pt: "5px" }}
              >
                Sector Performance
              </Typography>
              <ReactApexChart
                options={optionSectorPerformance}
                series={optionSectorPerformance.series}
                type="bar"
                height={280}
              />
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: { xs: 1, md: 3 },
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <span
                    style={{
                      display: "inline-block",
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      backgroundColor: "#FF5D8D",
                      marginRight: "8px",
                    }}
                  />
                  <Typography sx={{ fontSize: "14px" }}>
                    Active Service Provider
                  </Typography>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <span
                    style={{
                      display: "inline-block",
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      backgroundColor: "#72BBFF",
                      marginRight: "8px",
                    }}
                  />
                  <Typography sx={{ fontSize: "14px" }}>
                    Service Provider Retension Rate
                  </Typography>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <span
                    style={{
                      display: "inline-block",
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      backgroundColor: "#11BEA9",
                      marginRight: "8px",
                    }}
                  />
                  <Typography sx={{ fontSize: "14px" }}>
                    New Service Provider
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: { xs: 1, md: 3 },
                  mt: "10px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <span
                    style={{
                      display: "inline-block",
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      backgroundColor: "#FF834D",
                      marginRight: "8px",
                    }}
                  />
                  <Typography sx={{ fontSize: "14px" }}>
                    Service Completion Rate
                  </Typography>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <span
                    style={{
                      display: "inline-block",
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      backgroundColor: "#FA18FF",
                      marginRight: "8px",
                    }}
                  />
                  <Typography sx={{ fontSize: "14px" }}>
                    Total Service Provider
                  </Typography>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <span
                    style={{
                      display: "inline-block",
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      backgroundColor: "#FBBC05",
                      marginRight: "8px",
                    }}
                  />
                  <Typography sx={{ fontSize: "14px" }}>
                    Average Rating
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              backgroundColor: "#FFFFFF",
              borderRadius: "10px",
              px: "20px",
              py: "10px",
              mt: "10px",
              height: "150px",
              mb: "10px",
              overflowY: "scroll",
              "&::-webkit-scrollbar": {
                width: "0px",
              },
              "&::-webkit-scrollbar-track": {
                background: "transparent",
              },
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "space-between",
                my: "10px",
              }}
            >
              <Typography sx={{ fontSize: "18px", fontWeight: 600 }}>
                Updates (10)
              </Typography>
              <Box
                sx={{
                  px: "12px",
                  borderRadius: "50px",
                  backgroundColor: "#F4F7FE",
                }}
              >
                <Typography sx={{ color: "#4318FF", cursor: "pointer" }}>
                  View All
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                px: "15px",
                py: "10px",
                mb: "15px",
                borderRadius: "16px",
                background: "#FFF0FF",
                border: "1px solid #FA18FF",
              }}
            >
              <Typography sx={{ color: "#2B3674", fontWeight: 600 }}>
                Title of the update
              </Typography>
              <Typography sx={{ color: "#72768B", fontSize: "12px" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
              </Typography>
            </Box>
            <Box
              sx={{
                px: "15px",
                py: "10px",
                mb: "15px",
                borderRadius: "16px",
                background: "#F1FFFD",
                border: "1px solid #11BEA9",
              }}
            >
              <Typography sx={{ color: "#2B3674", fontWeight: 600 }}>
                Title of the update
              </Typography>
              <Typography sx={{ color: "#72768B", fontSize: "12px" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            width: "350px",
            p: "10px",
            borderRadius: "14px",
            backgroundColor: "#FFFFFF",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 0.5,
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  borderRadius: "15px",
                  backgroundColor: "#F4F7FE",
                  p: "10px",
                  mr: "8px",
                }}
              >
                <Box
                  component="img"
                  src={TotalTicketsIcon}
                  sx={{
                    height: "30px",
                    width: "100%",
                  }}
                />
              </Box>
              <Box>
                <Typography
                  sx={{
                    color: "#808080",
                    fontSize: { xs: "14px", md: "16px" },
                    fontWeight: 500,
                  }}
                >
                  Total tickets
                </Typography>
                <Typography
                  sx={{ fontSize: { xs: "20px", md: "24px" }, fontWeight: 600 }}
                >
                  XXX
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                ml: { xs: "15px", md: "30px" },
                borderRadius: "8px",
                background: "#4318FF",
                px: "5px",
                py: "10px",
              }}
            >
              <Typography sx={{ color: "#FFFFFF" }}>Raise a Ticket</Typography>
            </Box>
          </Box>
          <Box
            sx={{
              width: "100%",
              backgroundColor: "#E5E6FF",
              borderRadius: "50px",
              overflow: "hidden",
              mt: "10px",
            }}
          >
            <Box
              sx={{ width: "60%", backgroundColor: "#FBBC05", height: "6.5px" }}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "space-between",
              mt: "10px",
            }}
          >
            <Typography>Pending Tickets (03)</Typography>
            <Box
              sx={{
                px: "12px",
                borderRadius: "50px",
                backgroundColor: "#F4F7FE",
              }}
            >
              <Typography sx={{ cursor: "pointer", color: "#4318FF" }}>
                View All
              </Typography>
            </Box>
          </Box>
          {mainDashboardRightColmData?.map((value, index) => (
            <RightBox value={value} />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default DashboardHome;
