import Chart from "../chart/Chart";
import { useState } from "react";
import { useEffect , useMemo} from "react";
import { userRequest } from "../../requestMethods";

export default function UserAnalytics() {
  const [userStats, setUserStats] = useState([]);
  const MONTHS = useMemo(
    () => [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    []
  );

  useEffect(() => {
    const getStats = async () => {
      try {
        const res = await userRequest.get("/users/stats");
        res.data.map((item) =>
          setUserStats((prev) => [
            ...prev,
            { name: MONTHS[item._id - 1], "Active User": item.total },
          ])
        );
      } catch {}
    };
    getStats();
  }, [MONTHS]);

  return (
    <div className="home">
      
      <Chart
        data={userStats}
        title="User Analytics"
        grid
        dataKey="Active User"
      />
    </div>
  );
}
