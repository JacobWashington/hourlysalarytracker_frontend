import { React, useState } from "react";
import "./Register.css";
import RegisterForm from "../../components/registerForm/RegisterForm";

const Register = () => {
  const homeStations = [
    "ABQ",
    "ALB",
    "AMA",
    "AUA",
    "ATL",
    "AUS",
    "BDL",
    "BHM",
    "BNA",
    "BOS",
    "BLI",
    "BMD",
    "BWI",
    "BUR",
    "BUF",
    "BZE",
    "CUN",
    "CLE",
    "CLT",
    "CMH",
    "COS",
    "CZM",
    "DCA",
    "DAL",
    "DEN",
    "DFW",
    "DTW",
    "DSM",
    "ECP",
    "ELP",
    "EUG",
    "FAT",
    "FLL",
    "GCM",
    "GEG",
    "GSP",
    "GRR",
    "HAV",
    "HDN",
    "HNL",
    "HRL",
    "HOU",
    "IAH",
    "ICT",
    "ILO",
    "ISP",
    "ITO",
    "JAN",
    "JAX",
    "KOA",
    "LAX",
    "LAS",
    "LBB",
    "LGA",
    "LIH",
    "LIT",
    "LGB",
    "MCO",
    "MBJ",
    "MCI",
    "MEM",
    "MHT",
    "MIA",
    "MKC",
    "MKE",
    "MLI",
    "MLU",
    "MSP",
    "MSY",
    "MYR",
    "MTJ",
    "NAS",
    "OKC",
    "OMA",
    "ONT",
    "ORD",
    "ORF",
    "OAK",
    "OGG",
    "PHL",
    "PBI",
    "PHX",
    "PIT",
    "PNS",
    "PWM",
    "PVD",
    "RIC",
    "RDU",
    "ROC",
    "RSW",
    "SAB",
    "SJC",
    "SAN",
    "SAT",
    "SAV",
    "SDF",
    "SEA",
    "SFO",
    "SJC",
    "SNA",
    "SJD",
    "SJU",
    "SMF",
    "SRQ",
    "STL",
    "SLC",
    "SYR",
    "TPA",
    "TUL",
    "TUS",
    "VPS",
  ];

  return (
    <div className="_register">
      <div className="register-bg-image"></div>
      <div
        className="content"
        style={{ backgroundImage: "../../assets/images/HST_Image_3.jpg" }}
      >
        <RegisterForm homeStations={homeStations} />
      </div>
    </div>
  );
};

export default Register;
