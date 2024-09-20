import React from "react";
import { Box, Button, Rating, Typography } from "@mui/material";
import SupportIcon from "../assets/icons/Mdi_support_icon.svg";
import TopSection from "../components/common/topSection";
import RightBox from "../components/common/rightBox";
import {
  serviceDashboardComplianceStatus,
  serviceDashboardInProcess,
  serviceDashboardOpenTickets,
  serviceDashboardProviders,
  serviceDashboardRightColmData,
  serviceDashboardSolved,
  serviceDashboardTopBox,
} from "../dummyData";
import TopBox from "../components/common/topBox";
import StarIcon from "../assets/icons/StarIcon.svg";
import ServiceComp from "../assets/icons/ServiceCompIcon.svg";
import ServiceProv from "../assets/icons/Service_provider_icon.svg";
import Profileimg from "../assets/images/ProfileImg3.svg";
import ServiceCm from "../assets/icons/Service_icon.svg";
import OrdersGraphIcon from "../assets/icons/Orders_graph_icon.svg";
import ReactApexChart from "react-apexcharts";
import TopServiceProvidersCard from "../components/common/topServiceProviders.card";
import Map from "../assets/images/Map.svg";

const ServiceDashboardHome = () => {
  const value = ["Assign  Order", " Add New Service Provider"];

  const seriesPie = [20, 15, 25, 10, 20, 10];
  const optionsPie = {
    chart: {
      type: "pie",
      width: 350,
    },
    labels: [
      "Healthcare Sector",
      "Construction Sector",
      "Home Services Sector",
      "Petcare Sector",
      "Entertainment Sector",
      "Event Sector",
    ],
    colors: ["#FF847C", "#165DC9", "#48CFAF", "#CD7ED9", "#722391", "#FFDC7E"],
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    stroke: {
      width: 0,
    },
  };

  const options = {
    chart: {
      toolbar: {
        show: false,
      },
      height: 350,
      type: "line",
      stacked: false,
    },
    colors: ["#FF5D8D", "#72BBFF", "#11BEA9", "#FF834D", "#FA18FF", "#FBBC05"],
    stroke: {
      width: [4, 4, 4, 4, 4, 4],
    },
    xaxis: {
      categories: ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"],
    },
    yaxis: {
      min: 0,
      max: 5000,
      labels: {
        formatter: function (value) {
          return Math.round(value);
        },
      },
      axisTicks: {
        show: true,
      },
      axisBorder: {
        show: true,
        color: "#FF5D8D",
      },
    },
    grid: {
      show: false,
    },
    tooltip: {
      shared: true,
      intersect: false,
    },
    legend: {
      horizontalAlign: "left",
      offsetX: 40,
    },
  };

  const series = [
    {
      name: "Active Service Provider",
      data: [1200, 1900, 800, 1500, 250, 1600, 3000],
    },
    {
      name: "Service Provider Retention Rate",
      data: [1900, 150, 50, 800, 400, 2000, 1400],
    },
    {
      name: "New Service Provider",
      data: [500, 300, 2100, 1700, 2800, 2300, 3500],
    },
    {
      name: "Service Completion Rate",
      data: [900, 2200, 1800, 2700, 1200, 3200, 2500],
    },
    {
      name: "Total Service Provider",
      data: [2300, 2900, 2500, 3700, 2500, 4500, 4050],
    },
    {
      name: "Average Rating",
      data: [3000, 2500, 3200, 1600, 3600, 3300, 4800],
    },
  ];

  const optionsServiceLineChart = {
    chart: {
      toolbar: {
        show: false,
      },
      type: "line",
      height: 240,
    },
    colors: ["#FFE603", "#3FE900"],
    xaxis: {
      categories: [
        "JAN",
        "FEB",
        "MAR",
        "APR",
        "MAY",
        "JUN",
        "JUL",
        "AUG",
        "SEP",
        "OCT",
        "NOV",
        "DEC",
      ],
      axisBorder: {
        show: true,
        color: "#000",
      },
      axisTicks: {
        show: true,
        color: "#000",
      },
    },
    yaxis: {
      min: 0,
      max: 100,
      tickAmount: 10,
      labels: {
        formatter: function (value) {
          return value;
        },
      },
      axisBorder: {
        show: true,
        color: "#000",
      },
      axisTicks: {
        show: true,
        color: "#000",
      },
    },
    stroke: {
      curve: "smooth",
      width: 3,
    },
    grid: {
      show: false,
    },
    tooltip: {
      shared: true,
      intersect: false,
    },
    legend: {
      show: false,
    },
  };

  const seriesServiceLineChart = [
    {
      name: "Data Set 1",
      data: [10, 30, 25, 75, 40, 65, 90, 70, 85, 60, 5, 100], // Example data set
    },
    {
      name: "Data Set 2",
      data: [15, 75, 30, 40, 65, 20, 85, 55, 88, 92, 57, 98], // Example data set
    },
  ];

  const optionsService = {
    labels: [],
    colors: ["#3FE900", "#FF0000", "#FFE603"],
    legend: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: 0,
    },
  };

  const seriesService = [70, 20, 30];

  const optionsRadialBar = {
    chart: {
      height: 280,
      type: "radialBar",
    },
    series: [70, 80, 59],
    colors: ["#039F00", "#EB8C00", "#ADD633"],
    plotOptions: {
      radialBar: {
        dataLabels: {
          total: {
            show: false,
          },
        },
        track: {
          background: "#FFFFFF",
        },
      },
    },
    stroke: {
      lineCap: "round",
    },
    labels: ["Performance Metrics", "Feedback Summary", "Rating Trends"],
  };

  const seriesRadialBar = [70, 80, 59];

  const seriesBarChart = [
    {
      data: [80, 70, 85, 90, 60, 50, 75, 85, 65, 50, 70],
    },
  ];

  const optionsBarChart = {
    chart: {
      toolbar: {
        show: false,
      },
      type: "bar",
      stacked: true,
    },
    plotOptions: {
      bar: {
        horizontal: true,
        barHeight: "30%",
        borderRadius: 2,
      },
    },
    stroke: {
      width: 0,
    },
    xaxis: {
      categories: [
        "1000",
        "900",
        "800",
        "700",
        "600",
        "500",
        "400",
        "300",
        "200",
        "100",
        "0",
      ],
    },

    dataLabels: {
      enabled: false,
    },
    fill: {
      opacity: 1,
    },
    legend: {
      show: false,
    },
    grid: {
      show: false,
    },
  };

  const seriesDonutSector = [30, 15, 20, 20, 15, 5]; // Example data values for each sector

  const optionsDonutSector = {
    chart: {
      type: "donut",
      width: 380,
    },
    dataLabels: {
      enabled: true,
      style: {
        colors: ["#000"],
        fontSize: "10px",
      },
      formatter: function (val) {
        return Math.round(val);
      },
    },
    legend: {
      show: false,
    },
    colors: ["#FFB5B1", "#722391", "#FFDC7E", "#FF847C", "#165DC9", "#48CFAF"],
    labels: [
      "Petcare Sector",
      "Entertainment Sector",
      "Event Sector",
      "Healthcare Sector",
      "Construction Sector",
      "Home Services Sector",
    ],
    stroke: {
      width: 0,
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
          justifyContent: "space-between",
          mt: "15px",
        }}
      >
        <Box sx={{ width: { xs: "100%", md: "73%" } }}>
          <Box sx={{ display: "flex", gap: 1.5 }}>
            {serviceDashboardTopBox?.map((value, index) => (
              <TopBox value={value} />
            ))}
          </Box>
          <Box sx={{ mt: "15px", display: "flex", gap: 1.5 }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                // flexDirection: "column",
                justifyContent: "center",
                backgroundColor: "#FFFFFF",
                borderRadius: "10px",
                px: "25px",
                py: "15px",
                // height: "185px",
                width: { xs: "80%", sm: "40%", md: "40%" },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  pb: "10px",
                  borderBottom: "1px solid #CCCCCC80",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    background: "#F4F7FE",
                    borderRadius: "10px",
                    p: "8px",
                    mr: "10px",
                  }}
                >
                  <Box
                    component="img"
                    src={StarIcon}
                    sx={{
                      width: "30px",
                      height: "30px",
                    }}
                  />
                </Box>
                <Box>
                  <Typography sx={{ fontSize: "14px", color: "#808080" }}>
                    Average Rating
                  </Typography>
                  <Rating name="read-only" value={5} readOnly />
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  mt: "20px",
                  gap: 1,
                }}
              >
                <Box
                  component="img"
                  src={Profileimg}
                  sx={{
                    width: "45px",
                    height: "45px",
                  }}
                />
                <Box width="100%">
                  <Box
                    sx={{
                      display: "flex",
                      flexWrap: "wrap",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <Typography sx={{ fontSize: "18px" }}>Abhinav</Typography>
                    <Typography
                      sx={{
                        cursor: "pointer",
                        fontSize: "12px",
                        color: "#4318FF",
                      }}
                    >
                      View All
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexWrap: "wrap",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        alignItems: "center",
                      }}
                    >
                      <Rating
                        name="read-only"
                        value={4}
                        readOnly
                        sx={{ fontSize: "18px" }}
                      />
                      <Typography sx={{ fontSize: "14px" }}>4.0</Typography>
                    </Box>
                    <Typography sx={{ fontSize: "12px", color: "#808080" }}>
                      1day ago
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                // flexDirection: "column",
                justifyContent: "center",
                backgroundColor: "#FFFFFF",
                borderRadius: "10px",
                px: "25px",
                py: "15px",
                // height: "185px",
                width: { xs: "80%", sm: "40%", md: "40%" },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  pb: "10px",
                  borderBottom: "1px solid #CCCCCC80",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    background: "#F4F7FE",
                    borderRadius: "10px",
                    p: "10px",
                    mr: "10px",
                  }}
                >
                  <Box
                    component="img"
                    src={ServiceComp}
                    sx={{
                      width: "30px",
                      height: "30px",
                    }}
                  />
                </Box>
                <Box>
                  <Typography sx={{ color: "#808080" }}>
                    Service Completion Rate
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  mt: "10px",
                  gap: 2,
                }}
              >
                <Box
                  component="img"
                  src={ServiceCm}
                  sx={{
                    width: "55px",
                    height: "50px",
                  }}
                />
                <Box>
                  <Typography sx={{ fontSize: "14px", color: "#18CE98" }}>
                    85% completed
                  </Typography>
                  <Typography sx={{ fontSize: "14px", color: "#808080" }}>
                    {" "}
                    from last week
                  </Typography>
                </Box>
              </Box>
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                // flexDirection: "column",
                justifyContent: "center",
                backgroundColor: "#FFFFFF",
                borderRadius: "10px",
                px: "25px",
                py: "15px",
                // height: "185px",
                width: { xs: "80%", sm: "40%", md: "40%" },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  pb: "10px",
                  borderBottom: "1px solid #CCCCCC80",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    background: "#F4F7FE",
                    borderRadius: "10px",
                    p: "8px",
                    mr: "10px",
                  }}
                >
                  <Box
                    component="img"
                    src={ServiceProv}
                    sx={{
                      width: "30px",
                      height: "30px",
                    }}
                  />
                </Box>
                <Box>
                  <Typography sx={{ color: "#808080" }}>
                    Service Provider Retension Rate
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  mt: "10px",
                  gap: 2,
                }}
              >
                <Box
                  component="img"
                  src={OrdersGraphIcon}
                  sx={{
                    width: "60px",
                    height: "45px",
                  }}
                />
                <Box>
                  <Typography sx={{ color: "#808080" }}>
                    <span style={{ fontSize: "14px", color: "#18CE98" }}>
                      + 100%
                    </span>{" "}
                    more
                  </Typography>
                  <Typography sx={{ color: "#808080", fontSize: "14px" }}>
                    from last week
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              p: "10px",
              borderRadius: "14px",
              backgroundColor: "#FFFFFF",
              mt: "10px",
            }}
          >
            <ReactApexChart
              options={options}
              series={series}
              type="line"
              height={350}
            />
          </Box>
          <Box
            sx={{
              py: "10px",
              px: "30px",
              borderRadius: "14px",
              backgroundColor: "#FFFFFF",
              mt: "10px",
              pb: "20px",
            }}
          >
            <Typography
              sx={{
                fontWeight: 600,
                fontSize: { xs: "18px", md: "20px" },
                pt: "10px",
              }}
            >
              Service Provider Segmentation & Demographics
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                flexWrap: "wrap",
                mt: "10px",
                mb: "20px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  border: "0.5px solid #CCCCCC",
                  borderRadius: "16px",
                  p: "5px",
                  mt: "5px",
                  width: { xs: "90%", md: "45%" },
                }}
              >
                <Typography
                  sx={{
                    color: "#808080",
                  }}
                >
                  Service Provider accross different Segments{" "}
                </Typography>
                <Box>
                  <ReactApexChart
                    options={optionsPie}
                    series={seriesPie}
                    type="pie"
                    width={380}
                  />
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  border: "0.5px solid #CCCCCC",
                  borderRadius: "16px",
                  p: "5px",
                  width: { xs: "90%", md: "45%" },
                  mt: "5px",
                }}
              >
                <Typography
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    color: "#808080",
                  }}
                >
                  Attributes as per location, years of experience,
                  specialization{" "}
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    height: "300px",
                  }}
                >
                  <Box
                    component="img"
                    src={Map}
                    sx={{ width: { xs: "150px", sm: "auto" } }}
                  />
                </Box>
              </Box>
            </Box>
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
                    backgroundColor: "#FF847C",
                    marginRight: "8px",
                  }}
                />
                <Typography sx={{ fontSize: "14px", color: "#808080" }}>
                  Healthcare Sector
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
                    backgroundColor: "#165DC9",
                    marginRight: "8px",
                  }}
                />
                <Typography sx={{ fontSize: "14px", color: "#808080" }}>
                  Construction Sector
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
                    backgroundColor: "#48CFAF",
                    marginRight: "8px",
                  }}
                />
                <Typography sx={{ fontSize: "14px", color: "#808080" }}>
                  Home Services Sector
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
                    backgroundColor: "#CD7ED9",
                    marginRight: "8px",
                  }}
                />
                <Typography sx={{ fontSize: "14px", color: "#808080" }}>
                  Petcare Sector
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
                    backgroundColor: "#722391",
                    marginRight: "8px",
                  }}
                />
                <Typography sx={{ fontSize: "14px", color: "#808080" }}>
                  Entertainment Sector
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
                    backgroundColor: "#FFDC7E",
                    marginRight: "8px",
                  }}
                />
                <Typography sx={{ fontSize: "14px", color: "#808080" }}>
                  Event Sector
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              p: "10px",
              borderRadius: "14px",
              backgroundColor: "#FFFFFF",
              mt: "10px",
              px: "15px",
              pb: "20px",
            }}
          >
            <Typography
              sx={{
                fontWeight: 600,
                fontSize: { xs: "18px", md: "20px" },
                py: "15px",
              }}
            >
              Top Service Providers
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-between",
                gap: 1,
              }}
            >
              {serviceDashboardProviders?.map((value, index) => (
                <TopServiceProvidersCard value={value} />
              ))}
            </Box>
          </Box>
          <Box
            sx={{
              p: "10px",
              borderRadius: "14px",
              backgroundColor: "#FFFFFF",
              mt: "10px",
              px: "15px",
              pb: "20px",
            }}
          >
            <Typography
              sx={{
                fontWeight: 600,
                fontSize: { xs: "18px", md: "20px" },
                py: "15px",
              }}
            >
              Service offerings
            </Typography>
            <Box sx={{ display: "flex", flexWrap: "wrap" }}>
              <Box>
                <ReactApexChart
                  options={optionsService}
                  series={seriesService}
                  type="donut"
                  height={250}
                />
              </Box>
              <Box sx={{ width: { xs: "90%", sm: "50%", md: "70%" } }}>
                <ReactApexChart
                  options={optionsServiceLineChart}
                  series={seriesServiceLineChart}
                  type="line"
                  height={240}
                />
              </Box>
            </Box>
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
                    backgroundColor: "#3FE900",
                    marginRight: "8px",
                  }}
                />
                <Typography sx={{ fontSize: "14px", color: "#808080" }}>
                  Number of active services
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
                    backgroundColor: "#FFE603",
                    marginRight: "8px",
                  }}
                />
                <Typography sx={{ fontSize: "14px", color: "#808080" }}>
                  New services added
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
                    backgroundColor: "#FF0000",
                    marginRight: "8px",
                  }}
                />
                <Typography sx={{ fontSize: "14px", color: "#808080" }}>
                  Services removed
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              my: "10px",
              justifyContent: "space-between",
            }}
          >
            <Box
              sx={{
                p: "10px",
                borderRadius: "14px",
                backgroundColor: "#FFFFFF",
                px: "15px",
                pb: "20px",
                mt: "5px",
                width: { xs: "100%", md: "30%" },
              }}
            >
              <Typography
                sx={{
                  fontWeight: 600,
                  fontSize: { xs: "18px", md: "20px" },
                  py: "15px",
                }}
              >
                Performance Metrics & Feedback
              </Typography>
              <Box
                sx={{
                  position: "relative",
                  display: "inline-block",
                }}
              >
                <ReactApexChart
                  options={optionsRadialBar}
                  series={seriesRadialBar}
                  type="radialBar"
                  height={280}
                />
                <Box
                  sx={{
                    position: "absolute",
                    top: "17%",
                    left: "28%",
                    transform: "translate(-50%, -50%)",
                    textAlign: "center",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-end",
                      justifyContent: "flex-start",
                    }}
                  >
                    <Typography sx={{ fontSize: "10px", color: "#615E83" }}>
                      Performance Metrics{" "}
                      <span style={{ fontWeight: 600, color: "#1E1B39" }}>
                        70%
                      </span>
                    </Typography>
                    <Typography sx={{ fontSize: "10px", color: "#615E83" }}>
                      Feedback summary
                      <span style={{ fontWeight: 600, color: "#1E1B39" }}>
                        80%
                      </span>
                    </Typography>
                    <Typography sx={{ fontSize: "10px", color: "#615E83" }}>
                      Rating Trends
                      <span style={{ fontWeight: 600, color: "#1E1B39" }}>
                        59%
                      </span>
                    </Typography>
                  </Box>
                </Box>
              </Box>

              <Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    mb: 2,
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <span
                      style={{
                        display: "inline-block",
                        width: "8px",
                        height: "8px",
                        borderRadius: "50%",
                        backgroundColor: "#039F00",
                        marginRight: "8px",
                      }}
                    />
                    <Typography sx={{ fontSize: "14px", color: "#808080" }}>
                      Performance Metrics
                    </Typography>
                  </Box>
                  <Typography
                    sx={{ fontWeight: 700, textAlign: "right", width: "150px" }}
                  >
                    6,38,465.14
                  </Typography>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    mb: 2,
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <span
                      style={{
                        display: "inline-block",
                        width: "8px",
                        height: "8px",
                        borderRadius: "50%",
                        backgroundColor: "#EB8C00",
                        marginRight: "8px",
                      }}
                    />
                    <Typography sx={{ fontSize: "14px", color: "#808080" }}>
                      Feedback Summary
                    </Typography>
                  </Box>
                  <Typography
                    sx={{ fontWeight: 700, textAlign: "right", width: "150px" }}
                  >
                    41,881.2
                  </Typography>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    mb: 2,
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <span
                      style={{
                        display: "inline-block",
                        width: "8px",
                        height: "8px",
                        borderRadius: "50%",
                        backgroundColor: "#ADD633",
                        marginRight: "8px",
                      }}
                    />
                    <Typography sx={{ fontSize: "14px", color: "#808080" }}>
                      Rating Trends
                    </Typography>
                  </Box>
                  <Typography
                    sx={{ fontWeight: 700, textAlign: "right", width: "150px" }}
                  >
                    4,070,940.6
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Box
              sx={{
                p: "10px",
                borderRadius: "14px",
                backgroundColor: "#FFFFFF",
                px: "15px",
                pb: "20px",
                mt: "5px",
                width: { xs: "100%", md: "60%" },
              }}
            >
              <Typography
                sx={{
                  fontWeight: 600,
                  fontSize: { xs: "18px", md: "20px" },
                  pt: "15px",
                  pb: "5px",
                }}
              >
                Service Providers Report
              </Typography>
              <Typography sx={{ color: "#808080" }}>Leads per stage</Typography>
              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <ReactApexChart
                  options={optionsDonutSector}
                  series={seriesDonutSector}
                  type="donut"
                  width={300}
                />
                <Box>
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
                        backgroundColor: "#CD7ED9",
                        marginRight: "8px",
                      }}
                    />
                    <Typography sx={{ fontSize: "14px", color: "#808080" }}>
                      Petcare Sector
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
                        backgroundColor: "#722391",
                        marginRight: "8px",
                      }}
                    />
                    <Typography sx={{ fontSize: "14px", color: "#808080" }}>
                      Entertainment Sector
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
                        backgroundColor: "#FFDC7E",
                        marginRight: "8px",
                      }}
                    />
                    <Typography sx={{ fontSize: "14px", color: "#808080" }}>
                      Event Sector
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
                        backgroundColor: "#FF847C",
                        marginRight: "8px",
                      }}
                    />
                    <Typography sx={{ fontSize: "14px", color: "#808080" }}>
                      Healthcare Sector
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
                        backgroundColor: "#165DC9",
                        marginRight: "8px",
                      }}
                    />
                    <Typography sx={{ fontSize: "14px", color: "#808080" }}>
                      Construction Sector
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
                        backgroundColor: "#48CFAF",
                        marginRight: "8px",
                      }}
                    />
                    <Typography sx={{ fontSize: "14px", color: "#808080" }}>
                      Home Services Sector
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Box>
                <ReactApexChart
                  options={optionsBarChart}
                  series={seriesBarChart}
                  type="bar"
                  height={260}
                />
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            width: "350px",
            p: "10px",
            borderRadius: "14px",
            backgroundColor: "#FFFFFF",
            alignSelf: "flex-start",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Box
              sx={{
                borderRadius: "15px",
                backgroundColor: "#F4F7FE",
                p: "5px",
              }}
            >
              <Box
                component="img"
                src={SupportIcon}
                sx={{
                  height: "40px",
                  width: "100%",
                }}
              />
            </Box>
            <Typography
              sx={{ fontSize: { xs: "20px", md: "24px" }, fontWeight: 600 }}
            >
              Support & Compliance
            </Typography>
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
            <Typography>Support tickets </Typography>
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
          {serviceDashboardRightColmData?.map((value, index) => (
            <RightBox value={value} />
          ))}

          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "space-between",
              mt: "30px",
            }}
          >
            <Typography>Open tickets </Typography>
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
          {serviceDashboardOpenTickets?.map((value, index) => (
            <RightBox value={value} />
          ))}

          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "space-between",
              mt: "30px",
            }}
          >
            <Typography>In Progress</Typography>
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
          {serviceDashboardInProcess?.map((value, index) => (
            <RightBox value={value} />
          ))}

          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "space-between",
              mt: "30px",
            }}
          >
            <Typography>Solved</Typography>
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
          {serviceDashboardSolved?.map((value, index) => (
            <RightBox value={value} />
          ))}

          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "space-between",
              mt: "30px",
            }}
          >
            <Typography>Compliance Status</Typography>
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
          {serviceDashboardComplianceStatus?.map((value, index) => (
            <RightBox value={value} />
          ))}

          <Button
            sx={{
              color: "#FFFFFF",
              borderRadius: "8px",
              background: "#4318FF",
              mt: "10px",
            }}
          >
            Raise a Ticket
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default ServiceDashboardHome;
