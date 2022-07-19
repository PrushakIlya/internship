<?php

namespace Prushak\Internship\Services;

class ApiService
{
    public function getData(): string
    {
        return json_decode(file_get_contents('php://input'), true);
    }

    public function destroy($url): void
    {
        $curl = curl_init($url);
        curl_setopt($curl, CURLOPT_CUSTOMREQUEST, 'DELETE');

        curl_exec($curl);
        curl_close($curl);
    }

    public function curl($url, $method): void
    {
        $curl = curl_init($url);
        curl_setopt($curl, CURLOPT_CUSTOMREQUEST, $method);
        curl_setopt($curl, CURLOPT_POSTFIELDS, $_POST);

        curl_exec($curl);
        curl_close($curl);
    }

    public function curlReturn($url): string
    {
        $curl = curl_init($url);
        curl_setopt($curl, CURLOPT_CUSTOMREQUEST, 'GET');
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);

        $results = curl_exec($curl);
        curl_close($curl);

        return $results;
    }

    public function toArray($content): array
    {
        $results = [];
        foreach ($content as $item) {
            array_push($results, (array)$item);
        }

        return $results;
    }

    public function toArrayEqual($url, $id): array
    {
        $results = [];
        foreach ($url as $item) {
            if ($item->id === (int)$id) {
                array_push($results, (array)$item);

                break;
            }
        }

        return $results;
    }

    public function checkEmail($modelEmail): string
    {
        $result = $modelEmail;

        return json_encode(!empty($result));
    }

    public function checkEmailGo($results): string
    {
        $responseData = json_decode($results);
        foreach ($responseData as $item) {
            if ($item->email === $this->getData()) {
                return json_encode(true);
            }
        }

        return json_encode(false);
    }
}
