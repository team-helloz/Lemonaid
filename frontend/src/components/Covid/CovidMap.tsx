import { useEffect, useMemo, useRef } from "react";

import useSWR from "swr";

import { json } from "d3-fetch";
import * as topojson from "topojson";
import { select } from "d3-selection";
import { geoPath, geoMercator } from "d3-geo";