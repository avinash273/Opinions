import * as React from 'react';
import {Dimensions, ScrollView, StyleSheet} from 'react-native';
import {Text, View} from '../components/Themed';
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
} from "react-native-chart-kit";

const screenWidth = Dimensions.get("window").width;

const datas = {
    labels: ["Swim", "Bike", "Run"], // optional
    data: [0.4, 0.6, 0.8]
};


const commitsData = [
    {date: "2017-01-02", count: 1},
    {date: "2017-01-03", count: 2},
    {date: "2017-01-04", count: 3},
    {date: "2017-01-05", count: 4},
    {date: "2017-01-06", count: 5},
    {date: "2017-01-30", count: 2},
    {date: "2017-01-31", count: 3},
    {date: "2017-03-01", count: 2},
    {date: "2017-04-02", count: 4},
    {date: "2017-03-05", count: 2},
    {date: "2017-02-30", count: 4}
];

const chartConfig = {
    backgroundGradientFrom: "#1E2923",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#08130D",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false // optional
};

const data = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
        {
            data: [20, 45, 28, 80, 99, 43],
            color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
            strokeWidth: 2 // optional
        }
    ],
    legend: ["Rainy Days"] // optional
};


export default function Statistics() {
    return (
        <ScrollView style={styles.scrollView}>
            <View style={styles.container}>
                <Text style={styles.title}>Statistics and Data Mining</Text>
                {/*<View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)"/>*/}

                <View>
                    <LineChart
                        data={{
                            labels: ["January", "February", "March", "April", "May", "June"],
                            datasets: [
                                {
                                    data: [
                                        Math.random() * 100,
                                        Math.random() * 100,
                                        Math.random() * 100,
                                        Math.random() * 100,
                                        Math.random() * 100,
                                        Math.random() * 100
                                    ]
                                }
                            ]
                        }}
                        width={Dimensions.get("window").width} // from react-native
                        height={220}
                        yAxisLabel="$"
                        yAxisSuffix="k"
                        yAxisInterval={1} // optional, defaults to 1
                        chartConfig={{
                            backgroundColor: "#e26a00",
                            backgroundGradientFrom: "#fb8c00",
                            backgroundGradientTo: "#ffa726",
                            decimalPlaces: 2, // optional, defaults to 2dp
                            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                        }}
                        bezier
                        style={{
                            marginVertical: 8,
                            borderRadius: 16
                        }}
                    />

                    {/*<LineChart*/}
                    {/*    data={data}*/}
                    {/*    width={screenWidth}*/}
                    {/*    height={220}*/}
                    {/*    chartConfig={chartConfig}*/}
                    {/*/>*/}

                    <LineChart
                        data={data}
                        width={screenWidth}
                        height={256}
                        verticalLabelRotation={30}
                        chartConfig={chartConfig}
                        bezier
                    />
                    {/*@ts-ignore*/}
                    <ProgressChart
                        data={datas}
                        width={screenWidth}
                        height={220}
                        strokeWidth={16}
                        radius={32}
                        chartConfig={chartConfig}
                        hideLegend={false}
                    />

                    {/*@ts-ignore*/}
                    <ContributionGraph
                        values={commitsData}
                        endDate={new Date("2017-04-01")}
                        numDays={105}
                        width={screenWidth}
                        height={220}
                        chartConfig={chartConfig}
                    />
                </View>

            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
    scrollView: {
        backgroundColor: 'white',
        marginHorizontal: 10,
    },
});
