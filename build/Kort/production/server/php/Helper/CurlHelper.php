<?php
/**
 * kort - Helper\CurlHelper class
 */

namespace Helper;

/**
 * The CurlHelper class is a wrapper around the curl function of PHP
 *
 * It is used to simplify the access to these functions and to easily mock for testing.
 *
 * @see http://php.net/manual/en/book.curl.php for details about cURL in PHP
 * @see Webservice\DbProxy
 */
class CurlHelper
{
    /** The curl handler on which all functions are applied */
    protected $curl;

    /**
    * Creates a new instance of CurlHelper
    * @return a new instance of CurlHelper
    */
    public function __construct()
    {
        $this->curl = \curl_init();
    }

    /**
     * Sets a curl option
     *
     * @param int $option
     * @param mixed $value
     * @return bool true on success or false on failure.
     */
    public function setOption($option, $value)
    {
        return curl_setopt($this->curl, $option, $value);
    }

    /**
     * Executes the configured curl request
     * @return mixed the result on success, false on failure.
     */
    public function execute()
    {
        return curl_exec($this->curl);
    }

    /**
     * Closes the connection to the remote site
     */
    public function close()
    {
        curl_close($this->curl);
    }
}
