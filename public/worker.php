<?php

use Guzzle\Http\Client as Client;
use Kbjr\Git;

require __DIR__ . '/../vendor/autoload.php';

$TODOIST_API_KEY = getenv("TODOIST_API_KEY") || "3f9312e364c52bb69b62f81a8029d7ff34a031f6";
$PREMIUM = getenv("PREMIUM") ?? '';

function main()
{
    global $TODOIST_API_KEY, $PREMIUM;

    if (empty($TODOIST_API_KEY)) {
        echo "Please set the TODOIST_API_KEY environment variable.\n";
        exit(1);
    }

    $data = fetchTodoistData($TODOIST_API_KEY, $PREMIUM);

    // updateReadme($data);

    echo "<pre>" . print_r($data, true) . "</pre>";
}

$todoist = [];
$jobFailFlag = false;
$README_FILE_PATH = "./README.md";

function fetchTodoistData()
{
    global $todoist, $jobFailFlag;

    $todoist = [];

    $guzzClient = new Client([
        'base_uri' => 'https://api.todoist.com/sync/v9/completed/get_stats',
        'timeout' => 5.0,
        'headers' => [
            'Authorization' => 'Bearer 3f9312e364c52bb69b62f81a8029d7ff34a031f6',
            'Content-Type' => 'application/json'
        ],
    ]);

    // create a request
    $guzzReq = '';


    // get the response
    $response = $guzzClient->send($guzzReq);

    // get the response body
    $responseBody = $response->getBody();

    // decode the json
    $data = json_decode($responseBody, true);

    print_r($data);

    return $data;
}

function updateReadme($data)
{
    $karma = $data["karma"];
    $completed_count = $data["completed_count"];
    $days_items = $data["days_items"];
    $goals = $data["goals"];
    $week_items = $data["week_items"];

    $karmaPoint = ["🏆  **" . number_format($karma) . "** Karma Points"];
    array_push($todoist, $karmaPoint);

    $dailyGoal = ["🌸  Completed **" . $days_items[0]["total_completed"] . "** tasks today"];
    array_push($todoist, $dailyGoal);

    // if ($PREMIUM == "true") {
    //     $weekItems = ["🗓  Completed **" . $week_items[0]["total_completed"] . "** tasks this week"];
    //     array_push($todoist, $weekItems);
    // }

    $totalTasks = ["✅  Completed **" . number_format($completed_count) . "** tasks so far"];
    array_push($todoist, $totalTasks);

    $longestStreak = ["⏳  Longest streak is **" . $goals["max_daily_streak"]["count"] . "** days"];
    array_push($todoist, $longestStreak);

    if (count($todoist) == 0) {
        return;
    }

    if (count($todoist) > 0) {
        // $readmeData = file_get_contents(README_FILE_PATH);

        $readmeData = file_get_contents('./README.md');

        $newReadme = buildReadme($readmeData, implode("           \n", $todoist));
        if ($newReadme !== $readmeData) {
            // echo "Writing to " . $README_FILE_PATH . "\n";
            file_put_contents('./README.md', $newReadme);
            if (!getenv("TEST_MODE")) {
                commitReadme();
            }
        } else {
            echo "No change detected, skipping\n";
            exit(0);
        }
    } else {
        echo "Nothing fetched\n";
        exit(1);
    }
}

function buildReadme($prevReadmeContent, $newReadmeContent)
{
    $tagToLookFor = "<!-- TODO-IST:";
    $closingTag = "-->";
    $startOfOpeningTagIndex = strpos($prevReadmeContent, $tagToLookFor . "START");
    $endOfOpeningTagIndex = strpos($prevReadmeContent, $closingTag, $startOfOpeningTagIndex);
    $startOfClosingTagIndex = strpos($prevReadmeContent, $tagToLookFor . "END", $endOfOpeningTagIndex);

    if (
        $startOfOpeningTagIndex === false ||
        $endOfOpeningTagIndex === false ||
        $startOfClosingTagIndex === false
    ) {
        echo "Cannot find the comment tag on the readme:\n<!-- " . $tagToLookFor . "START -->\n<!-- " . $tagToLookFor . "END -->\n";
        exit(1);
    }

    return substr($prevReadmeContent, 0, $endOfOpeningTagIndex + strlen($closingTag))
        . "\n"
        . $newReadmeContent
        . "\n"
        . substr($prevReadmeContent, $startOfClosingTagIndex);
}

/**
 * Commit the readme file to the repo
 *
 * @return void
 */
// function commitReadme() {
//     // Getting config
//     $committerUsername = "Abhishek Naidu";
//     $committerEmail = "example@gmail.com";
//     $commitMessage = "Todoist updated.";

//     // Doing commit and push
//     exec("git config --global user.email " . $committerEmail);
//     exec("git config --global user.name " . $committerUsername);
//     exec("git add " . $README_FILE_PATH);
//     exec("git commit -m " . $commitMessage);
//     exec("git push");

//     echo "Readme updated successfully.\n";

//     // Making job fail if one of the source fails
//     exit($jobFailFlag ? 1 : 0);
// }

function commitReadme()
{

    include 'inc/Git.php';


    // Getting config
    $committerUsername = "aldoyh";
    $committerEmail = "aldoyh@gmail.com";

    // Doing commit and push
    $git = new \Kbjr\Git\Git();

    // $git->add('./README.md');
    // $git->commit('Todoist updated.');

    // $git->push('origin', 'master');



    echo "Readme updated successfully.\n";
}



// main();


function buildTodoist($jsonData)
{
    $data = json_decode($jsonData, true);

    $karma = $data["karma"];
    $completed_count = $data["completed_count"];
    $days_items = $data["days_items"];
    $goals = $data["goals"];
    $week_items = $data["week_items"];

    $todoist = [];

    $karmaPoint = ["🏆  **" . number_format($karma) . "** Karma Points"];
    array_push($todoist, $karmaPoint);

    $dailyGoal = ["🌸  Completed **" . $days_items[0]["total_completed"] . "** tasks today"];
    array_push($todoist, $dailyGoal);

    // if ($PREMIUM == "true") {
    //     $weekItems = ["🗓  Completed **" . $week_items[0]["total_completed"] . "** tasks this week"];
    //     array_push($todoist, $weekItems);
    // }

    $totalTasks = ["✅  Completed **" . number_format($completed_count) . "** tasks so far"];
    array_push($todoist, $totalTasks);

    $longestStreak = ["⏳  Longest streak is **" . $goals["max_daily_streak"]["count"] . "** days"];
    array_push($todoist, $longestStreak);

    $lastWeeklyStreak = ["📅  Latest Project Deploy Date **» " . $goals["last_weekly_streak"]["end"] . " «**"];
    array_push($todoist, $lastWeeklyStreak);


    return $todoist;
}


// raw json response
$jsonData = file_get_contents('todoist-response.json');

$composedMeta = buildTodoist($jsonData);

echo implode("           \n", $composedMeta);
